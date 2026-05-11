import { useState } from 'react'
import { Eye, Download, Trash2, FileText, ChevronLeft, ChevronRight } from 'lucide-react'
import { useReports } from '../hooks/useReports'
import type { Report } from '../types/report.types'
import { useTranslation } from '@/shared/hooks/useTranslation'

interface Props {
    selectedId: string | null
    onSelect: (id: string) => void
}


const ITEMS_PER_PAGE = 6

const Pagination = ({
    page,
    totalPages,
    total,
    onChange,
}: {
    page: number
    totalPages: number
    total: number
    onChange: (p: number) => void
}) => {
    const getPages = () => {
        if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1)

        if (page <= 4) return [1, 2, 3, 4, 5, '...', totalPages]
        if (page >= totalPages - 3) return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
        return [1, '...', page - 1, page, page + 1, '...', totalPages]
    }

    return (
        <div className="flex items-center justify-between pt-2 border-t border-[var(--bg-border)]">
            <span className="text-[9px] text-[var(--text-muted)]">
                Showing {Math.min((page - 1) * ITEMS_PER_PAGE + 1, total)}–{Math.min(page * ITEMS_PER_PAGE, total)} of {total} reports
            </span>

            <div className="flex items-center gap-1">
                {/* Prev */}
                <button
                    onClick={() => onChange(page - 1)}
                    disabled={page === 1}
                    className="w-6 h-6 rounded flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-secondary)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                    <ChevronLeft className="w-3.5 h-3.5" />
                </button>

                {/* Pages */}
                {getPages().map((p, i) =>
                    p === '...' ? (
                        <span key={`dot-${i}`} className="w-6 h-6 flex items-center justify-center text-[10px] text-[var(--text-muted)]">
                            ...
                        </span>
                    ) : (
                        <button
                            key={p}
                            onClick={() => onChange(p as number)}
                            className={[
                                'w-6 h-6 rounded text-[10px] font-semibold transition-all',
                                p === page
                                    ? 'bg-[var(--accent-cyan)] text-[var(--bg-base)]'
                                    : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]',
                            ].join(' ')}
                        >
                            {p}
                        </button>
                    )
                )}

                {/* Next */}
                <button
                    onClick={() => onChange(page + 1)}
                    disabled={page === totalPages}
                    className="w-6 h-6 rounded flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-secondary)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                    <ChevronRight className="w-3.5 h-3.5" />
                </button>
            </div>
        </div>
    )
}

export const ReportLibraryTable = ({ selectedId, onSelect }: Props) => {
    const { data: reports, isLoading } = useReports()
    const [page, setPage] = useState(1)

    const total = reports?.length ?? 0
    const totalPages = Math.max(1, Math.ceil(total / ITEMS_PER_PAGE))
    const paginated = reports?.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE) ?? []

    const { t, language } = useTranslation()

    const statusConfig = {
        completed: { label: t.reports.status, color: 'var(--status-ok)' },
        scheduled: { label: t.reports.status, color: 'var(--status-info)' },
        in_progress: { label: t.reports.status, color: 'var(--status-warn)' },
    }

    return (
        <div className="rounded-xl border border-[var(--bg-border)] bg-[var(--bg-card)] p-4 flex flex-col gap-3">
            <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-widest">
                {t.reports.library}
            </p>

            <table className="w-full text-[11px]">
                <thead>
                    <tr className="border-b border-[var(--bg-border)]">
                        {[t.reports.reportName, t.reports.dateGenerated, t.reports.type, t.reports.status, t.reports.actions].map(h => (
                            <th
                                key={h}
                                className="text-left text-[9px] font-semibold text-[var(--text-muted)] uppercase tracking-wider pb-2 pr-3"
                            >
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {isLoading
                        ? Array.from({ length: 6 }).map((_, i) => (
                            <tr key={i}>
                                <td colSpan={5} className="py-1.5">
                                    <div className="h-6 rounded bg-[var(--bg-surface)] animate-pulse" />
                                </td>
                            </tr>
                        ))
                        : paginated.map((report: Report) => {
                            const status = statusConfig[report.status]
                            return (
                                <tr
                                    key={report.id}
                                    onClick={() => onSelect(report.id)}
                                    className={[
                                        'border-b border-[var(--bg-border)] last:border-0 cursor-pointer transition-colors',
                                        selectedId === report.id
                                            ? 'bg-[var(--accent-cyan)] bg-opacity-10'
                                            : 'hover:bg-[var(--bg-surface)]',
                                    ].join(' ')}
                                >
                                    <td className="py-2.5 pr-3">
                                        <div className="flex items-center gap-2">
                                            <FileText className="w-3.5 h-3.5 text-[var(--text-muted)] shrink-0" />
                                            <span className="text-[var(--text-secondary)] truncate max-w-[160px]">
                                                {report.name[language]}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-2.5 pr-3 font-mono text-[var(--text-muted)] whitespace-nowrap">
                                        {report.dateGenerated}
                                    </td>
                                    <td className="py-2.5 pr-3 text-[var(--text-muted)]">{report.type}</td>
                                    <td className="py-2.5 pr-3">
                                        <span
                                            className="px-2 py-0.5 rounded text-[9px] font-semibold border"
                                            style={{ color: status.color, borderColor: status.color }}
                                        >
                                            {status.label}
                                        </span>
                                    </td>
                                    <td className="py-2.5">
                                        <div className="flex items-center gap-2">
                                            {[Eye, Download, Trash2].map((Icon, i) => (
                                                <button
                                                    key={i}
                                                    onClick={e => e.stopPropagation()}
                                                    className="text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors"
                                                >
                                                    <Icon className="w-3.5 h-3.5" />
                                                </button>
                                            ))}
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>

            <Pagination
                page={page}
                totalPages={totalPages}
                total={total}
                onChange={setPage}
            />
        </div>
    )
}