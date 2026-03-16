import { useState, useEffect, useMemo } from 'react'
import { useUser, UserButton } from '@clerk/react'
import { TrendingUp, TrendingDown, DollarSign, Users, Calendar, BarChart2 } from 'lucide-react'
import { fetchRegistros } from '../lib/sheets'
import type { Registro } from '../lib/mockData'

type Tab = 'ventas' | 'gastos'

function fmt(n: number) {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(n)
}
function amt(s: string) { return parseFloat(s) || 0 }
function monthLabel(ym: string) {
    const [y, m] = ym.split('-')
    const names = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
    return `${names[parseInt(m) - 1]} ${y}`
}

export default function AdminDashboard() {
    const { user } = useUser()
    const [tab, setTab] = useState<Tab>('ventas')
    const [registros, setRegistros] = useState<Registro[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchRegistros().then(data => { setRegistros(data); setLoading(false) })
            .catch(e => { console.error('fetchRegistros error:', e); setLoading(false) })
    }, [])

    const ventas = useMemo(() => registros.filter(r => r.Tipo === 'Venta'), [registros])
    const gastos = useMemo(() => registros.filter(r => r.Tipo === 'Gasto'), [registros])

    const cobrado    = ventas.filter(r => r.Estado === 'Pagado').reduce((s, r) => s + amt(r.Monto), 0)
    const pendiente  = ventas.filter(r => r.Estado === 'Pendiente').reduce((s, r) => s + amt(r.Monto), 0)
    const totalVentas = ventas.reduce((s, r) => s + amt(r.Monto), 0)
    const totalGastos = gastos.reduce((s, r) => s + amt(r.Monto), 0)
    const neto = cobrado - totalGastos
    const margen = cobrado > 0 ? Math.round((neto / cobrado) * 100) : 0

    const clientes = useMemo(() =>
        [...new Set(ventas.map(r => r.Descripción.split('—')[0].split('-')[0].trim()))],
        [ventas]
    )

    const monthly = useMemo(() => {
        const map: Record<string, { ingresos: number; gastos: number }> = {}
        registros.forEach(r => {
            const ym = r.Fecha.slice(0, 7)
            if (!map[ym]) map[ym] = { ingresos: 0, gastos: 0 }
            if (r.Tipo === 'Venta' && r.Estado === 'Pagado') map[ym].ingresos += amt(r.Monto)
            if (r.Tipo === 'Gasto') map[ym].gastos += amt(r.Monto)
        })
        return Object.entries(map)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([ym, d]) => ({ ym, ...d, neto: d.ingresos - d.gastos }))
    }, [registros])

    const maxBar = Math.max(...monthly.map(m => Math.max(m.ingresos, m.gastos)), 1)
    const detailRows = tab === 'ventas' ? ventas : gastos

    return (
        <div className="min-h-screen bg-slate-900 text-white font-sans">

            {/* Header */}
            <header className="border-b border-slate-800 px-6 md:px-10 py-4 flex items-center justify-between">
                <div>
                    <h1 className="text-xl font-black tracking-tight text-yellow-400">Aurea</h1>
                    <p className="text-slate-400 text-xs mt-0.5">Hola, {user?.firstName ?? 'Admin'}</p>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${import.meta.env.VITE_SHEETS_URL ? 'bg-green-900 text-green-400' : 'bg-red-900 text-red-400'}`}>
                        {import.meta.env.VITE_SHEETS_URL ? '● SHEET' : '● MOCK'}
                    </span>
                </div>
                <UserButton />
            </header>

            <main className="max-w-6xl mx-auto px-6 md:px-10 py-10 space-y-12">

                {/* ── KPIs ── */}
                <section>
                    <SectionTitle>Resumen general</SectionTitle>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                        <KpiCard
                            label="Ventas realizadas"
                            value={fmt(totalVentas)}
                            sub={`${ventas.length} operacion${ventas.length !== 1 ? 'es' : ''}`}
                            color="blue"
                            icon={<BarChart2 size={15} />}
                        />
                        <KpiCard
                            label="Cobrado"
                            value={fmt(cobrado)}
                            sub={`${ventas.filter(r => r.Estado === 'Pagado').length} pagadas`}
                            color="green"
                            icon={<TrendingUp size={15} />}
                        />
                        <KpiCard
                            label="Pendiente por cobrar"
                            value={fmt(pendiente)}
                            sub={`${ventas.filter(r => r.Estado === 'Pendiente').length} sin cobrar`}
                            color="yellow"
                            icon={<DollarSign size={15} />}
                        />
                        <KpiCard
                            label="Gastos"
                            value={fmt(totalGastos)}
                            sub={`${gastos.length} registro${gastos.length !== 1 ? 's' : ''}`}
                            color="red"
                            icon={<TrendingDown size={15} />}
                        />
                        <KpiCard
                            label="Ganancia neta"
                            value={fmt(neto)}
                            sub={cobrado > 0 ? `Margen: ${margen}%` : 'Sin ingresos cobrados'}
                            color={neto >= 0 ? 'green' : 'red'}
                            icon={<TrendingUp size={15} />}
                        />
                        <KpiCard
                            label="Clientes"
                            value={String(clientes.length)}
                            sub="clientes únicos"
                            color="purple"
                            icon={<Users size={15} />}
                        />
                    </div>
                </section>

                {/* ── Por mes ── */}
                {monthly.length > 0 && (
                    <section>
                        <SectionTitle icon={<Calendar size={13} />}>Ganancias por mes</SectionTitle>
                        <div className="bg-slate-800/60 rounded-xl border border-slate-700 overflow-hidden">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-slate-700 text-slate-400 text-left">
                                        <th className="px-4 py-3 font-semibold">Mes</th>
                                        <th className="px-4 py-3 font-semibold text-right">Ingresos</th>
                                        <th className="px-4 py-3 font-semibold text-right">Gastos</th>
                                        <th className="px-4 py-3 font-semibold text-right">Neto</th>
                                        <th className="px-4 py-3 hidden md:table-cell w-36"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {monthly.map(m => (
                                        <tr key={m.ym} className="border-b border-slate-700/40 last:border-0 hover:bg-slate-700/20 transition-colors">
                                            <td className="px-4 py-3 font-semibold text-slate-200">{monthLabel(m.ym)}</td>
                                            <td className="px-4 py-3 text-right font-mono text-green-400">{fmt(m.ingresos)}</td>
                                            <td className="px-4 py-3 text-right font-mono text-red-400">{fmt(m.gastos)}</td>
                                            <td className={`px-4 py-3 text-right font-mono font-bold ${m.neto >= 0 ? 'text-yellow-400' : 'text-red-400'}`}>
                                                {fmt(m.neto)}
                                            </td>
                                            <td className="px-4 py-3 hidden md:table-cell">
                                                <div className="space-y-1">
                                                    <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                                        <div className="h-full bg-green-500/60 rounded-full transition-all" style={{ width: `${(m.ingresos / maxBar) * 100}%` }} />
                                                    </div>
                                                    <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                                        <div className="h-full bg-red-500/60 rounded-full transition-all" style={{ width: `${(m.gastos / maxBar) * 100}%` }} />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex gap-4 mt-2 px-1">
                            <span className="flex items-center gap-1.5 text-xs text-slate-500"><span className="w-2 h-2 rounded-full bg-green-500/60 inline-block" />Ingresos</span>
                            <span className="flex items-center gap-1.5 text-xs text-slate-500"><span className="w-2 h-2 rounded-full bg-red-500/60 inline-block" />Gastos</span>
                        </div>
                    </section>
                )}

                {/* ── Clientes ── */}
                {clientes.length > 0 && (
                    <section>
                        <SectionTitle icon={<Users size={13} />}>Clientes activos</SectionTitle>
                        <div className="flex flex-wrap gap-2">
                            {clientes.map(c => (
                                <span key={c} className="bg-slate-800 border border-slate-700 rounded-full px-4 py-1.5 text-sm text-slate-200 hover:border-yellow-700 transition-colors">
                                    {c}
                                </span>
                            ))}
                        </div>
                    </section>
                )}

                {/* ── Registros detallados ── */}
                <section>
                    <SectionTitle>Registros detallados</SectionTitle>

                    <div className="flex gap-1 mb-5 border-b border-slate-800">
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

                    {loading ? (
                        <p className="text-slate-500 text-sm py-10 text-center">Cargando datos...</p>
                    ) : detailRows.length === 0 ? (
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
                                    {detailRows.map((r, i) => (
                                        <tr key={i} className="border-b border-slate-800/60 last:border-0 hover:bg-slate-800/40 transition-colors">
                                            <td className="px-4 py-3 text-slate-300 whitespace-nowrap">{r.Fecha}</td>
                                            <td className="px-4 py-3 text-slate-200">{r.Descripción}</td>
                                            <td className="px-4 py-3 text-right font-mono text-yellow-300 whitespace-nowrap">{fmt(amt(r.Monto))}</td>
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
                </section>

            </main>
        </div>
    )
}

function SectionTitle({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
    return (
        <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
            {icon}
            {children}
        </h2>
    )
}

function KpiCard({ label, value, sub, color, icon }: {
    label: string
    value: string
    sub: string
    color: 'green' | 'red' | 'yellow' | 'blue' | 'purple'
    icon: React.ReactNode
}) {
    const s = {
        green:  { border: 'border-green-800/60',  icon: 'text-green-400',  bg: 'bg-green-400/5'  },
        red:    { border: 'border-red-800/60',    icon: 'text-red-400',    bg: 'bg-red-400/5'    },
        yellow: { border: 'border-yellow-700/60', icon: 'text-yellow-400', bg: 'bg-yellow-400/5' },
        blue:   { border: 'border-blue-800/60',   icon: 'text-blue-400',   bg: 'bg-blue-400/5'   },
        purple: { border: 'border-purple-800/60', icon: 'text-purple-400', bg: 'bg-purple-400/5' },
    }[color]

    return (
        <div className={`${s.bg} rounded-xl p-4 border ${s.border}`}>
            <div className={`flex items-center gap-1.5 mb-3 ${s.icon}`}>
                {icon}
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{label}</span>
            </div>
            <p className="text-xl md:text-2xl font-black text-white tracking-tight">{value}</p>
            <p className="text-xs text-slate-500 mt-1">{sub}</p>
        </div>
    )
}
