import type { Registro } from './mockData'
import { registrosMock } from './mockData'

export async function fetchRegistros(token?: string): Promise<Registro[]> {
    if (!token) return registrosMock
    try {
        const res = await fetch('/api/registros', {
            headers: { Authorization: `Bearer ${token}` },
        })
        if (!res.ok) throw new Error(`${res.status}`)
        return await res.json() as Registro[]
    } catch {
        console.warn('API fetch failed — using mock data')
        return registrosMock
    }
}
