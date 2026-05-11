import { ChevronRight, UserPlus } from 'lucide-react'
import { useUserRoles } from '../hooks/useSettings'
import { useTranslation } from '@/shared/hooks/useTranslation'

export const AccessControl = () => {
    const { data: roles, isLoading } = useUserRoles()
    const { t, language } = useTranslation()
    return (
        <div className="rounded-xl border border-[var(--bg-border)] bg-[var(--bg-card)] p-4 flex flex-col gap-4 h-full">
            {/* Header */}
            <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded flex items-center justify-center bg-[var(--accent-cyan)] bg-opacity-20 text-[10px] font-bold text-[var(--accent-cyan)]">4</span>
                <h2 className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-widest">
                    {t.settings.accessControl}
                </h2>
            </div>

            {/* User Roles table */}
            <div className="rounded-lg bg-[var(--bg-surface)] border border-[var(--bg-border)] overflow-hidden">
                <div className="flex items-center justify-between px-3 py-2 border-b border-[var(--bg-border)]">
                    <p className="text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-wider">
                        {t.settings.userRoles}
                    </p>
                    <span className="text-[9px] px-2 py-0.5 rounded border border-[var(--accent-cyan)] text-[var(--accent-cyan)]">
                        {roles?.reduce((acc, r) => acc + r.count, 0)} Users
                    </span>
                </div>

                {isLoading
                    ? Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="h-10 border-b border-[var(--bg-border)] animate-pulse" />
                    ))
                    : roles?.map(role => (
                        <div
                            key={role.role}
                            className="flex items-center gap-3 px-3 py-2.5 border-b border-[var(--bg-border)] last:border-0 hover:bg-[var(--bg-card)] transition-colors cursor-pointer"
                        >
                            <span className="text-[11px] font-semibold text-[var(--text-primary)] w-24 shrink-0">
                                {role.role}
                            </span>
                            <span className="text-[11px] text-[var(--text-muted)] flex-1">
                                {role.description[language]}
                            </span>
                            <div className="flex items-center gap-1 text-[var(--text-muted)]">
                                <span className="text-[10px]">👤</span>
                                <span className="text-[10px]">{role.count}</span>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                        </div>
                    ))}
            </div>

            {/* Add User */}
            <button className="flex items-center justify-center gap-2 w-full py-2 rounded-lg border border-[var(--bg-border)] text-[11px] text-[var(--text-secondary)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-all mt-auto">
                <UserPlus className="w-3.5 h-3.5" />
                {t.settings.addUser}
            </button>
        </div>
    )
}