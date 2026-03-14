import { Routes, Route } from 'react-router-dom'
import { useAuth, RedirectToSignIn } from '@clerk/react'
import App from './App'
import AdminDashboard from './pages/AdminDashboard'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { isSignedIn, isLoaded } = useAuth()
    if (!isLoaded) return <div className="min-h-screen bg-slate-900" />
    if (!isSignedIn) return <RedirectToSignIn redirectUrl="/admin" />
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
