import type { Registro } from './mockData'
import { registrosMock } from './mockData'

const SHEETS_URL = import.meta.env.VITE_SHEETS_URL as string | undefined

// Converts dd/mm/yy or dd/mm/yyyy → YYYY-MM-DD
function normalizeDate(raw: string): string {
    const parts = raw.trim().split('/')
    if (parts.length !== 3) return raw
    const [d, m, y] = parts
    const year = y.length === 2 ? `20${y}` : y
    return `${year}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`
}

export async function fetchRegistros(): Promise<Registro[]> {
    if (!SHEETS_URL) {
        return registrosMock
    }
    try {
        const res = await fetch(SHEETS_URL)
        const text = await res.text()
        const [headerLine, ...rows] = text.trim().split('\n')
        const headers = headerLine.split(',').map(h => h.trim().replace(/^"|"$/g, ''))
        return rows
            .filter(row => row.trim())
            .map(row => {
                const values = row.split(',').map(v => v.trim().replace(/^"|"$/g, ''))
                const record = Object.fromEntries(headers.map((h, i) => [h, values[i] ?? ''])) as unknown as Registro
                record.Fecha = normalizeDate(record.Fecha)
                return record
            })
            .filter(r => r.Tipo === 'Venta' || r.Tipo === 'Gasto')
    } catch {
        console.warn('Sheets fetch failed — using mock data')
        return registrosMock
    }
}
