import { Wifi, ChevronRight, Edit2 } from 'lucide-react'
import { useDeviceConfig } from '../hooks/useSettings'

export const DeviceConfiguration = () => {
    const { data, isLoading } = useDeviceConfig()

    return (
        <div className="rounded-xl border border-[var(--bg-border)] bg-[var(--bg-card)] p-4 flex flex-col gap-4 h-full">
            {/* Header */}
            <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded flex items-center justify-center bg-[var(--accent-cyan)] bg-opacity-20 text-[10px] font-bold text-[var(--accent-cyan)]">1</span>
                <h2 className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-widest">
                    Device Configuration
                </h2>
            </div>

            {isLoading ? (
                <div className="flex flex-col gap-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="h-8 rounded bg-[var(--bg-surface)] animate-pulse" />
                    ))}
                </div>
            ) : (
                <>
                    {/* Sensor Modules */}
                    <div className="rounded-lg bg-[var(--bg-surface)] border border-[var(--bg-border)] p-3">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-[11px] font-bold text-[var(--accent-cyan)] uppercase tracking-wider">
                                Sensor Modules
                            </p>
                            <span className="text-[9px] px-2 py-0.5 rounded border border-[var(--accent-cyan)] text-[var(--accent-cyan)]">
                                {data?.sensors.length} Active
                            </span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            {data?.sensors.map(sensor => (
                                <div key={sensor.id} className="flex items-center justify-between text-[11px]">
                                    <span className="text-[var(--text-secondary)]">{sensor.name}</span>
                                    <span className="text-[var(--text-muted)] font-mono">ID: {sensor.id}</span>
                                    <div className="flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--status-ok)]" />
                                        <span className="text-[var(--status-ok)]">Online</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="text-[10px] text-[var(--accent-cyan)] hover:underline mt-2">
                            View all sensors &gt;
                        </button>
                    </div>

                    {/* Edge Gateway */}
                    <div className="rounded-lg bg-[var(--bg-surface)] border border-[var(--bg-border)] p-3">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-wider">
                                Edge Gateway / ESP32
                            </p>
                            <span className="text-[9px] px-2 py-0.5 rounded border border-[var(--status-ok)] text-[var(--status-ok)]">
                                1 Active
                            </span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            {[
                                { label: 'Gateway ID', value: data?.gateway.gatewayId },
                                { label: 'Firmware Version', value: data?.gateway.firmwareVersion },
                                { label: 'Status', value: 'Connected', isStatus: true },
                            ].map(({ label, value, isStatus }) => (
                                <div key={label} className="flex justify-between text-[11px]">
                                    <span className="text-[var(--text-muted)]">{label}</span>
                                    <span className={isStatus ? 'text-[var(--status-ok)] flex items-center gap-1' : 'text-[var(--text-secondary)] font-mono'}>
                                        {isStatus && <span className="w-1.5 h-1.5 rounded-full bg-[var(--status-ok)]" />}
                                        {value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Connectivity */}
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--bg-border)]">
                        <div className="flex items-center gap-2">
                            <Wifi className="w-4 h-4 text-[var(--accent-cyan)]" />
                            <div>
                                <p className="text-[11px] font-semibold text-[var(--text-secondary)]">Connectivity</p>
                                <p className="text-[10px] text-[var(--status-ok)]">
                                    Connected — {data?.gateway.network}
                                </p>
                            </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[var(--text-muted)]" />
                    </div>

                    {/* Edit button */}
                    <button className="flex items-center justify-center gap-2 w-full py-2 rounded-lg border border-[var(--bg-border)] text-[11px] text-[var(--text-secondary)] hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-all">
                        <Edit2 className="w-3.5 h-3.5" />
                        Edit Configuration
                    </button>
                </>
            )}
        </div>
    )
}