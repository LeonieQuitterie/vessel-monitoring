import { useState } from 'react'
import { ExternalLink, FileText, Download, FileSpreadsheet, AlignLeft, Type } from 'lucide-react'
import { useReports } from '../hooks/useReports'

const exportFormats = [
  { label: 'PDF',   icon: FileText        },
  { label: 'Excel', icon: FileSpreadsheet },
  { label: 'CSV',   icon: AlignLeft       },
  { label: 'Word',  icon: Type            },
]

interface Props {
  selectedId: string | null
}

const Toggle = ({ value, onChange }: { value: boolean; onChange: () => void }) => (
  <button
    onClick={onChange}
    className={[
      'w-9 h-5 rounded-full transition-all relative shrink-0',
      value ? 'bg-[var(--accent-cyan)]' : 'bg-[var(--bg-border)]',
    ].join(' ')}
  >
    <span
      className={[
        'absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all',
        value ? 'left-4' : 'left-0.5',
      ].join(' ')}
    />
  </button>
)

export const ReportPreviewPanel = ({ selectedId }: Props) => {
  const { data: reports } = useReports()
  const [includeCharts, setIncludeCharts]     = useState(true)
  const [includeRaw, setIncludeRaw]           = useState(true)
  const [includeBranding, setIncludeBranding] = useState(true)

  // ← Reactive: theo selectedId, fallback về index 1
  const report = (selectedId
    ? reports?.find(r => r.id === selectedId)
    : reports?.[1]
  ) ?? reports?.[0]

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Preview */}
      <div className="rounded-xl border border-[var(--bg-border)] bg-[var(--bg-card)] p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-widest shrink-0">
            Report Preview
          </p>
          {/* Dropdown reactive theo selectedId */}
          <select
            value={report?.id ?? ''}
            onChange={() => {}}
            className="flex-1 text-[10px] bg-[var(--bg-surface)] border border-[var(--bg-border)] rounded px-2 py-1 text-[var(--text-secondary)] outline-none focus:border-[var(--accent-cyan)] truncate"
          >
            {reports?.map(r => (
              <option key={r.id} value={r.id}>
                {r.name} – {r.dateGenerated}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-3">
          {/* Mini preview card */}
          <div className="w-28 shrink-0 rounded-lg bg-[var(--bg-surface)] border border-[var(--bg-border)] p-2 flex flex-col gap-1.5">
            <p className="text-[8px] font-bold text-[var(--accent-cyan)] uppercase truncate">
              {report?.name}
            </p>
            <div className="h-1 rounded bg-[var(--bg-border)] w-3/4" />
            <div className="h-8 rounded bg-[var(--bg-border)] w-full mt-1" />
            <div className="flex flex-col gap-1 mt-1">
              {[
                ['Report ID', 'VR-2024'],
                ['Date',      report?.dateGenerated?.slice(0, 10) ?? ''],
                ['Type',      report?.type ?? ''],
                ['Status',    report?.status ?? ''],
              ].map(([l, v]) => (
                <div key={l} className="flex justify-between gap-1">
                  <span className="text-[7px] text-[var(--text-muted)] shrink-0">{l}</span>
                  <span className="text-[7px] text-[var(--text-secondary)] truncate">{v}</span>
                </div>
              ))}
            </div>
            <p className="text-[7px] text-[var(--text-muted)] mt-1 text-center">Page 1 of 12</p>
          </div>

          {/* Summary */}
          <div className="flex flex-col gap-2 flex-1">
            <p className="text-[11px] font-semibold text-[var(--text-primary)]">Summary</p>
            <p className="text-[10px] text-[var(--text-muted)] leading-relaxed">
              This report provides an analysis of {report?.type?.toLowerCase()} data across critical machinery over the selected monitoring period.
            </p>
            <p className="text-[11px] font-semibold text-[var(--text-primary)] mt-1">Key Findings</p>
            <ul className="flex flex-col gap-1">
              {[
                'Gradual rise in vibration over 7 days.',
                'Port side main engine bearing shows elevated RMS values.',
                'No immediate critical alerts, but trend suggests wear progression.',
                'Recommend inspection during next maintenance window.',
              ].map((f, i) => (
                <li key={i} className="flex items-start gap-1.5 text-[10px] text-[var(--text-secondary)]">
                  <span className="text-[var(--status-ok)] mt-0.5 shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button className="flex items-center gap-1.5 text-[10px] text-[var(--accent-cyan)] hover:underline self-start mt-auto">
          <ExternalLink className="w-3 h-3" />
          View Full Report
        </button>
      </div>

      {/* Export */}
      <div className="rounded-xl border border-[var(--bg-border)] bg-[var(--bg-card)] p-4 flex flex-col gap-4">
        <div>
          <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-widest">
            Report Actions & Export
          </p>
          <p className="text-[10px] text-[var(--text-muted)] mt-0.5">
            Choose format and options to export or share this report.
          </p>
        </div>

        {/* Format buttons */}
        <div className="grid grid-cols-4 gap-2">
          {exportFormats.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className="flex flex-col items-center gap-1.5 p-2.5 rounded-lg border border-[var(--bg-border)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] text-[var(--text-secondary)] transition-all"
            >
              <Icon className="w-4 h-4" />
              <span className="text-[10px] font-semibold">{label}</span>
            </button>
          ))}
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {[
            { label: 'Include Charts & Graphs',    sub: 'Embed all visualizations in the report',    value: includeCharts,    toggle: () => setIncludeCharts(v => !v)    },
            { label: 'Include Raw Data',           sub: 'Attach raw datasets and sensor logs',       value: includeRaw,       toggle: () => setIncludeRaw(v => !v)       },
            { label: 'Add Company Logo & Branding', sub: 'Include branding in the exported report',  value: includeBranding,  toggle: () => setIncludeBranding(v => !v)  },
          ].map(({ label, sub, value, toggle }) => (
            <div key={label} className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold text-[var(--text-primary)]">{label}</p>
                <p className="text-[10px] text-[var(--text-muted)]">{sub}</p>
              </div>
              <Toggle value={value} onChange={toggle} />
            </div>
          ))}
        </div>

        {/* Export button */}
        <button className="w-full py-2.5 rounded-lg bg-[var(--accent-cyan)] text-[var(--bg-base)] text-[11px] font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mt-auto">
          <Download className="w-4 h-4" />
          Export Report
        </button>
      </div>
    </div>
  )
}