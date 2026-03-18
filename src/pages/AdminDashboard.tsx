import { useState, useEffect } from 'react'
import { useAuth, useUser, UserButton } from '@clerk/react'
import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { fetchRegistros } from '../lib/sheets'
import type { Registro } from '../lib/mockData'

type Tab = 'ventas' | 'gastos'

function formatARS(value: string) {
    const n = parseFloat(value) || 0
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(n)
}

export default function AdminDashboard() {
    const { getToken } = useAuth()
    const { user } = useUser()
    const [tab, setTab] = useState<Tab>('ventas')
    const [registros, setRegistros] = useState<Registro[]>([])
    const [loading, setLoading] = useState(true)

    // Noindex: el dashboard de admin no debe aparecer en resultados de búsqueda
    useEffect(() => {
        const prevTitle = document.title
        document.title = 'Admin — Aurea'
        const noindex = document.createElement('meta')
        noindex.name = 'robots'
        noindex.content = 'noindex,nofollow'
        noindex.id = 'admin-noindex'
        document.head.appendChild(noindex)
        return () => {
            document.title = prevTitle
            document.getElementById('admin-noindex')?.remove()
        }
    }, [])

    useEffect(() => {
        getToken()
            .then(token => fetchRegistros(token ?? undefined))
            .then(data => { setRegistros(data); setLoading(false) })
    }, [getToken])

    const ventas = registros.filter(r => r.Tipo === 'Venta')
    const gastos = registros.filter(r => r.Tipo === 'Gasto')

    const totalIngresos = ventas
        .filter(r => r.Estado === 'Pagado')
        .reduce((sum, r) => sum + (parseFloat(r.Monto) || 0), 0)

    const totalGastos = gastos.reduce((sum, r) => sum + (parseFloat(r.Monto) || 0), 0)
    const neto = totalIngresos - totalGastos

    const rows = tab === 'ventas' ? ventas : gastos

    return (
        <div className="min-h-screen bg-slate-900 text-white font-sans">
            {/* Header */}
            <header className="border-b border-slate-800 px-6 md:px-10 py-4 flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-black tracking-tight text-yellow-400">Aurea</h1>
                    <p className="text-slate-400 text-xs mt-0.5">
                        Hola, {user?.firstName ?? 'Admin'}
                    </p>
                </div>
                <UserButton />
            </header>

            <main className="max-w-5xl mx-auto px-6 md:px-10 py-10">

                {/* Summary cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                    <SummaryCard
                        label="Ingresos cobrados"
                        value={formatARS(String(totalIngresos))}
                        icon={<TrendingUp size={18} className="text-green-400" />}
                        color="green"
                    />
                    <SummaryCard
                        label="Gastos"
                        value={formatARS(String(totalGastos))}
                        icon={<TrendingDown size={18} className="text-red-400" />}
                        color="red"
                    />
                    <SummaryCard
                        label="Neto"
                        value={formatARS(String(neto))}
                        icon={<Minus size={18} className={neto >= 0 ? 'text-yellow-400' : 'text-red-400'} />}
                        color={neto >= 0 ? 'yellow' : 'red'}
                    />
                </div>

                {/* Tabs */}
                <div className="flex gap-1 mb-6 border-b border-slate-800">
                    {(['ventas', 'gastos'] as Tab[]).map(t => (
                        <button
                            key={t}
                            onClick={() => setTab(t)}
                            className={`px-5 py-2.5 text-sm font-bold capitalize tracking-wide border-b-2 -mb-px transition-colors bg-transparent cursor-pointer ${
                                tab === t
                                    ? 'border-yellow-400 text-yellow-400'
                                    : 'border-transparent text-slate-500 hover:text-slate-300'
                            }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                {/* Table */}
                {loading ? (
                    <p className="text-slate-500 text-sm py-10 text-center">Cargando datos...</p>
                ) : rows.length === 0 ? (
                    <p className="text-slate-500 text-sm py-10 text-center">Sin registros.</p>
                ) : (
                    <div className="overflow-x-auto rounded-xl border border-slate-800">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-slate-800 text-slate-400 text-left">
                                    <th className="px-4 py-3 font-semibold">Fecha</th>
                                    <th className="px-4 py-3 font-semibold">Descripción</th>
                                    <th className="px-4 py-3 font-semibold text-right">Monto</th>
                                    {tab === 'ventas' && <th className="px-4 py-3 font-semibold">Estado</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((r, i) => (
                                    <tr
                                        key={i}
                                        className="border-b border-slate-800/60 last:border-0 hover:bg-slate-800/40 transition-colors"
                                    >
                                        <td className="px-4 py-3 text-slate-300 whitespace-nowrap">{r.Fecha}</td>
                                        <td className="px-4 py-3 text-slate-200">{r.Descripción}</td>
                                        <td className="px-4 py-3 text-right font-mono text-yellow-300 whitespace-nowrap">
                                            {formatARS(r.Monto)}
                                        </td>
                                        {tab === 'ventas' && (
                                            <td className="px-4 py-3">
                                                <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${
                                                    r.Estado === 'Pagado'
                                                        ? 'bg-green-900/60 text-green-400'
                                                        : 'bg-yellow-900/60 text-yellow-400'
                                                }`}>
                                                    {r.Estado || '—'}
                                                </span>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </main>
        </div>
    )
}

function SummaryCard({
    label,
    value,
    icon,
    color,
}: {
    label: string
    value: string
    icon: React.ReactNode
    color: 'green' | 'red' | 'yellow'
}) {
    const border = { green: 'border-green-800', red: 'border-red-800', yellow: 'border-yellow-700' }[color]
    return (
        <div className={`bg-slate-800 rounded-xl p-5 border ${border}`}>
            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">
                {icon}
                {label}
            </div>
            <p className="text-2xl font-black text-white tracking-tight">{value}</p>
        </div>
    )
}
