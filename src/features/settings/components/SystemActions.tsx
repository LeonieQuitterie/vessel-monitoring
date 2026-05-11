import { HardDrive, Upload, Power, Trash2 } from 'lucide-react'
import { useTranslation } from '@/shared/hooks/useTranslation'


export const SystemActions = () => {

    const { t } = useTranslation()

    const actions = [
        { icon: HardDrive, label: t.settings.backup, sub: t.settings.backupSub, btnLabel: 'Backup', btnStyle: 'border border-[var(--bg-border)] text-[var(--text-secondary)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]' },
        { icon: Upload, label: t.settings.restore, sub: t.settings.restoreSub, btnLabel: 'Restore', btnStyle: 'border border-[var(--bg-border)] text-[var(--text-secondary)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]' },
        { icon: Power, label: t.settings.reboot, sub: t.settings.rebootSub, btnLabel: 'Reboot', btnStyle: 'border border-[var(--status-warn)] text-[var(--status-warn)] hover:bg-[var(--status-warn)] hover:text-[var(--bg-base)]' },
        { icon: Trash2, label: t.settings.factoryReset, sub: t.settings.factoryResetSub, btnLabel: 'Reset', btnStyle: 'border border-[var(--status-danger)] text-[var(--status-danger)] hover:bg-[var(--status-danger)] hover:text-[var(--bg-base)]' },
    ]

    return (
        <div className="rounded-xl border border-[var(--bg-border)] bg-[var(--bg-card)] p-4 flex flex-col gap-3">
            <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-widest">
                {t.settings.systemActions}
            </p>
            {actions.map(({ icon: Icon, label, sub, btnLabel, btnStyle }) => (
                <div key={label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[var(--bg-surface)] border border-[var(--bg-border)] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-[var(--text-muted)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-semibold text-[var(--text-primary)]">{label}</p>
                        <p className="text-[10px] text-[var(--text-muted)] truncate">{sub}</p>
                    </div>
                    <button className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all shrink-0 ${btnStyle}`}>
                        {btnLabel}
                    </button>
                </div>
            ))}
        </div>
    )
}