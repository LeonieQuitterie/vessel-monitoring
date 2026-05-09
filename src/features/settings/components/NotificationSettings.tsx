import { useState } from 'react'
import { Mail, MessageSquare, Monitor, Clock, Bell, Settings } from 'lucide-react'
import { useNotificationConfig } from '../hooks/useSettings'

const Toggle = ({ value, onChange }: { value: boolean; onChange: () => void }) => (
    <button
        onClick={onChange}
        className={['w-9 h-5 rounded-full transition-all relative shrink-0', value ? 'bg-[var(--accent-cyan)]' : 'bg-[var(--bg-border)]'].join(' ')}
    >
        <span className={['absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all', value ? 'left-4' : 'left-0.5'].join(' ')} />
    </button>
)

export const NotificationSettings = () => {
    const { data: config } = useNotificationConfig()
    const [email, setEmail] = useState(config?.emailEnabled ?? true)
    const [sms, setSms] = useState(config?.smsEnabled ?? true)
    const [dashboard, setDashboard] = useState(config?.dashboardAlertsEnabled ?? true)

    const notifItems = [
        { icon: Mail, label: 'Email Notifications', sub: 'Receive alerts via email', value: email, toggle: () => setEmail(v => !v) },
        { icon: MessageSquare, label: 'SMS Notifications', sub: 'Receive critical alerts via SMS', value: sms, toggle: () => setSms(v => !v) },
        { icon: Monitor, label: 'Dashboard Alerts', sub: 'Show real-time alerts in dashboard', value: dashboard, toggle: () => setDashboard(v => !v) },
    ]

    return (
        <div className="rounded-xl border border-[var(--bg-border)] bg-[var(--bg-card)] p-4 flex flex-col gap-4">
            {/* Header */}
            <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded flex items-center justify-center bg-[var(--accent-cyan)] bg-opacity-20 text-[10px] font-bold text-[var(--accent-cyan)]">3</span>
                <h2 className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-widest">
                    Notification Settings
                </h2>
            </div>

            {/* Toggle items */}
            <div className="flex flex-col gap-3">
                {notifItems.map(({ icon: Icon, label, sub, value, toggle }) => (
                    <div key={label} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[var(--bg-surface)] border border-[var(--bg-border)] flex items-center justify-center shrink-0">
                            <Icon className="w-4 h-4 text-[var(--text-muted)]" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-semibold text-[var(--text-primary)]">{label}</p>
                            <p className="text-[10px] text-[var(--text-muted)]">{sub}</p>
                        </div>
                        <Toggle value={value} onChange={toggle} />
                        <Settings className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
                    </div>
                ))}

                {/* Escalation Rules */}
                <div className="flex items-center gap-3 pt-2 border-t border-[var(--bg-border)]">
                    <div className="w-8 h-8 rounded-lg bg-[var(--bg-surface)] border border-[var(--bg-border)] flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4 text-[var(--text-muted)]" />
                    </div>
                    <div className="flex-1">
                        <p className="text-[11px] font-semibold text-[var(--text-primary)]">Escalation Rules</p>
                        <p className="text-[10px] text-[var(--text-muted)]">Escalate if unresolved after</p>
                    </div>
                    <select className="bg-[var(--bg-surface)] border border-[var(--bg-border)] rounded-lg px-2 py-1.5 text-[11px] text-[var(--text-secondary)] outline-none focus:border-[var(--accent-cyan)]">
                        <option>30 minutes</option>
                        <option>1 hour</option>
                        <option>2 hours</option>
                        <option>4 hours</option>
                    </select>
                </div>
            </div>

            {/* Test Alert button */}
            <button className="flex items-center justify-center gap-2 w-full py-2 rounded-lg border border-[var(--bg-border)] text-[11px] text-[var(--text-secondary)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-all mt-auto">
                <Bell className="w-3.5 h-3.5" />
                Test Alert
            </button>
        </div>
    )
}