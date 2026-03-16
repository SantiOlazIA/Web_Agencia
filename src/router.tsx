import { Routes, Route } from 'react-router-dom'
import { useAuth, useUser, RedirectToSignIn } from '@clerk/react'
import App from './App'
import AdminDashboard from './pages/AdminDashboard'

const ADMIN_EMAILS = ['olazabalfrancisco818@gmail.com', 'croccogero@gmail.com']

function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { isSignedIn, isLoaded } = useAuth()
    const { user } = useUser()
    if (!isLoaded) return <div className="min-h-screen bg-slate-900" />
    if (!isSignedIn) return <RedirectToSignIn redirectUrl="/admin" />
    const email = user?.primaryEmailAddress?.emailAddress ?? ''
    if (!ADMIN_EMAILS.includes(email)) {
        return (
            <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center text-sm text-slate-400">
                Acceso denegado.
            </div>
        )
    }
    return <>{children}</>
}

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/admin" element={
                <ProtectedRoute>
                    <AdminDashboard />
                </ProtectedRoute>
            } />
        </Routes>
    )
}
