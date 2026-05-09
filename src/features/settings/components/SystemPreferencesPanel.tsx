import { Globe, RefreshCw, Languages, Moon } from 'lucide-react'
import { useSystemPreferences } from '../hooks/useSettings'

const prefItems = [
    { key: 'timezone', label: 'Time Zone', icon: Globe, options: ['UTC (Coordinated Universal Time)', 'GMT+7 (Indochina Time)', 'GMT+8 (Singapore Time)'] },
    { key: 'dataSyncInterval', label: 'Data Sync Interval', icon: RefreshCw, options: ['30 seconds', '1 minute', '5 minutes', '10 minutes'] },
    { key: 'language', label: 'Language', icon: Languages, options: ['English (US)', 'Vietnamese', 'Japanese'] },
    { key: 'theme', label: 'Theme', icon: Moon, options: ['Ocean Dark', 'Deep Space', 'Navy Blue'] },
]

export const SystemPreferencesPanel = () => {
    const { data: prefs } = useSystemPreferences()

    return (
        <div className="rounded-xl border border-[var(--bg-border)] bg-[var(--bg-card)] p-4 flex flex-col gap-4 h-full">
            {/* Header */}
            <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded flex items-center justify-center bg-[var(--accent-cyan)] bg-opacity-20 text-[10px] font-bold text-[var(--accent-cyan)]">5</span>
                <h2 className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-widest">
                    System Preferences
                </h2>
            </div>

            {/* Preference rows */}
            <div className="flex flex-col gap-3">
                {prefItems.map(({ key, label, icon: Icon, options }) => (
                    <div key={key} className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-[var(--bg-surface)] border border-[var(--bg-border)] flex items-center justify-center shrink-0">
                            <Icon className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
                        </div>
                        <span className="text-[11px] text-[var(--text-secondary)] w-28 shrink-0">{label}</span>
                        <select
                            defaultValue={prefs?.[key as keyof typeof prefs] ?? options[0]}
                            className="flex-1 bg-[var(--bg-surface)] border border-[var(--bg-border)] rounded-lg px-2.5 py-1.5 text-[11px] text-[var(--text-secondary)] outline-none focus:border-[var(--accent-cyan)] transition-colors"
                        >
                            {options.map(o => <option key={o}>{o}</option>)}
                        </select>
                    </div>
                ))}
            </div>
        </div>
    )
}