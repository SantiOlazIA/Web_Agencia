import { createClerkClient } from '@clerk/backend'

const SHEETS_URL =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vQFmN-3yFu097FuyVIdaeEGau9-0FnzwF-4nIMfBpnXk_0MokEazlVhtl_Br4O90ElKoX1QskFb0k2O/pub?gid=1610982333&single=true&output=csv'

const clerk = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY! })

function normalizeDate(raw: string): string {
    const parts = raw.trim().split('/')
    if (parts.length !== 3) return raw
    const [d, m, y] = parts
    const year = y.length === 2 ? `20${y}` : y
    return `${year}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`
}

export default async function handler(req: Request): Promise<Response> {
    const cors = { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' }

    const token = req.headers.get('Authorization')?.replace('Bearer ', '')
    if (!token) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: cors })
    }

    try {
        await clerk.verifyToken(token)
    } catch {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: cors })
    }

    const res = await fetch(SHEETS_URL)
    const text = await res.text()
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

    return new Response(JSON.stringify(records), { status: 200, headers: cors })
}

export const config = { runtime: 'edge' }
