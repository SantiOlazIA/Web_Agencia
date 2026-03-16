import { verifyToken } from '@clerk/backend'
import type { IncomingMessage, ServerResponse } from 'node:http'

const SHEETS_URL =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQFmN-3yFu097FuyVIdaeEGau9-0FnzwF-4nIMfBpnXk_0MokEazlVhtl_Br4O90ElKoX1QskFb0k2O/pub?gid=1610982333&single=true&output=csv'

function normalizeDate(raw: string): string {
    const parts = raw.trim().split('/')
    if (parts.length !== 3) return raw
    const [d, m, y] = parts
    const year = y.length === 2 ? `20${y}` : y
    return `${year}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')

    const authHeader = Array.isArray(req.headers.authorization)
        ? req.headers.authorization[0]
        : req.headers.authorization ?? ''
    const token = authHeader.replace('Bearer ', '')

    if (!token) {
        res.statusCode = 401
        res.end(JSON.stringify({ error: 'Unauthorized' }))
        return
    }

    try {
        await verifyToken(token, { secretKey: process.env.CLERK_SECRET_KEY! })
    } catch {
        res.statusCode = 401
        res.end(JSON.stringify({ error: 'Unauthorized' }))
        return
    }

    const sheetRes = await fetch(SHEETS_URL)
    const text = await sheetRes.text()
    const [headerLine, ...rows] = text.trim().split('\n')
    const headers = headerLine.split(',').map(h => h.trim().replace(/^"|"$/g, ''))

    const records = rows
        .filter(row => row.trim())
        .map(row => {
            const values = row.split(',').map(v => v.trim().replace(/^"|"$/g, ''))
            const record = Object.fromEntries(headers.map((h, i) => [h, values[i] ?? '']))
            record['Fecha'] = normalizeDate(record['Fecha'] ?? '')
            return record
        })
        .filter(r => r['Tipo'] === 'Venta' || r['Tipo'] === 'Gasto')

    res.statusCode = 200
    res.end(JSON.stringify(records))
}
