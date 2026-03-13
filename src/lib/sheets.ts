import type { Registro } from './mockData'
import { registrosMock } from './mockData'

const SHEETS_URL = import.meta.env.VITE_SHEETS_URL as string | undefined

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
                return Object.fromEntries(headers.map((h, i) => [h, values[i] ?? ''])) as unknown as Registro
            })
    } catch {
        console.warn('Sheets fetch failed — using mock data')
        return registrosMock
    }
}
