import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { TopHeader } from './TopHeader'

export const AppShell = () => {
    return (
        <div className="flex h-screen w-screen overflow-hidden bg-[var(--bg-base)]">
            {/* Sidebar */}
            <Sidebar />

            {/* Main area */}
            <div className="flex flex-col flex-1 min-w-0">
                {/* Top Header */}
                <TopHeader />

                {/* Page content */}
                <main className="flex-1 overflow-y-auto p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}