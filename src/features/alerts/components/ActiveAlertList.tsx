import { useState } from 'react'
import { Search, SlidersHorizontal, ChevronRight } from 'lucide-react'
import { clsx } from 'clsx'
import { useAlerts } from '../hooks/useAlerts'
import { AlertSeverityBadge } from './AlertSeverityBadge'
import { useTranslation } from '@/shared/hooks/useTranslation'
import type { Alert } from '../types/alert.types'

interface Props {
  selectedId: string | null
  onSelect: (id: string) => void
}

const ITEMS_PER_PAGE = 5

export const ActiveAlertList = ({ selectedId, onSelect }: Props) => {
  const { data: alerts, isLoading } = useAlerts()
  const { t, language } = useTranslation()
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  // ← chỗ 1: filter theo đúng ngôn ngữ
  const filtered = alerts?.filter(a =>
    a.title[language].toLowerCase().includes(search.toLowerCase())
  ) ?? []

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-[var(--bg-border)] bg-[var(--bg-card)] p-4">
      {/* Header */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-widest flex-1">
          {t.alerts.activeAlerts}
        </span>
        <SlidersHorizontal className="w-3.5 h-3.5 text-[var(--text-muted)]" />
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[var(--text-muted)]" />
        <input
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1) }}
          placeholder={t.alerts.searchPlaceholder}
          className="w-full bg-[var(--bg-surface)] border border-[var(--bg-border)] rounded-lg pl-8 pr-3 py-1.5 text-[11px] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--accent-cyan)] transition-colors"
        />
      </div>

      {/* List */}
      <div className="flex flex-col gap-1.5">
        {isLoading
          ? Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-16 rounded-lg bg-[var(--bg-surface)] animate-pulse" />
            ))
          : paginated.map((alert: Alert) => (
              <button
                key={alert.id}
                onClick={() => onSelect(alert.id)}
                className={clsx(
                  'flex items-center gap-3 p-3 rounded-lg border transition-all text-left',
                  selectedId === alert.id
                    ? 'border-[var(--status-danger)] bg-[var(--bg-surface)]'
                    : 'border-transparent hover:border-[var(--bg-border)] hover:bg-[var(--bg-surface)]'
                )}
              >
                <AlertSeverityBadge severity={alert.severity} />
                <div className="flex-1 min-w-0">
                  {/* ← chỗ 2: title theo ngôn ngữ */}
                  <p className="text-[11px] font-semibold text-[var(--text-primary)] truncate">
                    {alert.title[language]}
                  </p>
                  {/* ← chỗ 3: subsystem theo ngôn ngữ */}
                  <p className="text-[10px] text-[var(--text-muted)] truncate mt-0.5">
                    {alert.subsystem[language]}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[10px] font-mono text-[var(--text-muted)]">
                    {new Date(alert.timestamp).toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit' })} UTC
                  </p>
                  <p className="text-[9px] text-[var(--text-muted)]">{alert.timeAgo}</p>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
              </button>
            ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between pt-1 border-t border-[var(--bg-border)]">
        <span className="text-[9px] text-[var(--text-muted)]">
          Showing {Math.min((page - 1) * ITEMS_PER_PAGE + 1, filtered.length)}–{Math.min(page * ITEMS_PER_PAGE, filtered.length)} of {filtered.length}
        </span>
        <div className="flex items-center gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={clsx(
                'w-5 h-5 rounded text-[10px] font-semibold transition-all',
                p === page
                  ? 'bg-[var(--accent-cyan)] text-[var(--bg-base)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
              )}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}