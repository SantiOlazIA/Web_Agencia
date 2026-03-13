export interface Registro {
    Fecha: string
    Tipo: 'Venta' | 'Gasto'
    Descripción: string
    Monto: string
    Estado: string
}

export const registrosMock: Registro[] = [
    { Fecha: '2026-02-01', Tipo: 'Venta', Descripción: 'El Gourmet Panadería — Plan Pro', Monto: '500000', Estado: 'Pagado' },
    { Fecha: '2026-03-01', Tipo: 'Venta', Descripción: 'Demo Contratista — Plan Base', Monto: '250000', Estado: 'Pendiente' },
    { Fecha: '2026-02-05', Tipo: 'Gasto', Descripción: 'Claude Pro', Monto: '25000', Estado: '' },
    { Fecha: '2026-03-01', Tipo: 'Gasto', Descripción: 'Clerk Pro', Monto: '15000', Estado: '' },
]
