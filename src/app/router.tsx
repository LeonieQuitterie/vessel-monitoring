import { createBrowserRouter } from 'react-router-dom'
import { AppShell } from '@/shared/components/layout/AppShell'
import {
  SystemOverviewBar, EngineHealthOverview,
  TrendAnalysisChart, SystemFlowDiagram, RecommendedActions,
} from '@/features/dashboard'
import {
  AlertCenterBar, ActiveAlertList, AlertDetailPanel,
  AlertSeverityChart, AlertTrendChart, AlertHistoryTable,
} from '@/features/alerts'
import { useAlertStore } from '@/store/useAlertStore'

const DashboardPage = () => (
  <div className="flex flex-col gap-4">
    <SystemOverviewBar />
    <EngineHealthOverview />
    <TrendAnalysisChart />
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2"><SystemFlowDiagram /></div>
      <div className="col-span-1"><RecommendedActions /></div>
    </div>
  </div>
)

const AlertsPage = () => {
  const { selectedAlertId, setSelectedAlertId } = useAlertStore()
  return (
    <div className="flex flex-col gap-4">
      <AlertCenterBar />

      {/* Row 2: List + Detail + Charts */}
      <div className="grid grid-cols-3 gap-4">
        {/* List */}
        <div className="col-span-1">
          <ActiveAlertList
            selectedId={selectedAlertId}
            onSelect={setSelectedAlertId}
          />
        </div>

        {/* Detail */}
        <div className="col-span-1 rounded-xl border border-[var(--bg-border)] bg-[var(--bg-card)] p-4">
          <AlertDetailPanel alertId={selectedAlertId} />
        </div>

        {/* Charts */}
        <div className="col-span-1 flex flex-col gap-4">
          <AlertSeverityChart />
          <AlertTrendChart />
        </div>
      </div>

      {/* Row 3: History Table */}
      <AlertHistoryTable />
    </div>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true,       element: <DashboardPage /> },
      { path: 'analytics', element: <div className="text-[var(--text-primary)] p-4">Analytics — coming soon</div> },
      { path: 'alerts',    element: <AlertsPage /> },
      { path: 'reports',   element: <div className="text-[var(--text-primary)] p-4">Reports — coming soon</div>   },
      { path: 'settings',  element: <div className="text-[var(--text-primary)] p-4">Settings — coming soon</div>  },
    ],
  },
])