import { NavLink } from 'react-router-dom'
import {
    LayoutDashboard,
    BarChart2,
    Bell,
    FileText,
    Settings,
    Menu,
    Wifi,
} from 'lucide-react'
import { APP_CONFIG } from '@/shared/constants/appConfig'

const navItems = [
    { to: '/', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/analytics', label: 'Analytics', icon: BarChart2 },
    { to: '/alerts', label: 'Alerts', icon: Bell },
    { to: '/reports', label: 'Reports', icon: FileText },
    { to: '/settings', label: 'Settings', icon: Settings },
]

export const Sidebar = () => {
    return (
        <aside className="flex flex-col w-[72px] min-h-screen border-r border-[var(--bg-border)] bg-[var(--bg-surface)] z-50">
            {/* Logo / Hamburger */}
            <div className="flex items-center justify-center h-16 border-b border-[var(--bg-border)]">
                <Menu className="w-5 h-5 text-[var(--text-secondary)] cursor-pointer hover:text-[var(--accent-cyan)] transition-colors" />
            </div>

            {/* Nav Items */}
            <nav className="flex flex-col items-center gap-1 pt-4 flex-1">
                {navItems.map(({ to, label, icon: Icon }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end={to === '/'}
                        className={({ isActive }) =>
                            [
                                'group relative flex flex-col items-center justify-center w-full py-3 gap-1 transition-all duration-200',
                                isActive
                                    ? 'text-[var(--accent-cyan)] bg-[var(--bg-card)] border-l-2 border-[var(--accent-cyan)]'
                                    : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:bg-[var(--bg-card)]',
                            ].join(' ')
                        }
                    >
                        <Icon className="w-5 h-5" />
                        <span className="text-[9px] font-medium tracking-wide font-['Outfit']">
                            {label}
                        </span>
                    </NavLink>
                ))}
            </nav>

            {/* System Online */}
            <div className="flex flex-col items-center justify-center py-4 gap-1 border-t border-[var(--bg-border)]">
                <div className="flex items-center gap-1">
                    <Wifi className="w-3 h-3 text-[var(--status-ok)]" />
                    <span className="text-[8px] text-[var(--status-ok)] font-medium">ONLINE</span>
                </div>
                <span className="text-[7px] text-[var(--text-muted)] text-center leading-tight px-1">
                    {APP_CONFIG.companyName}
                </span>
            </div>
        </aside>
    )
}