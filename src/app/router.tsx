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
import {
  AnalyticsOverviewBar, MultiParamTrendChart, PredictiveRiskPanel,
  AnomalyDetection, BehaviorComparison, AnalyticsRecommendations,
} from '@/features/analytics'
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
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <ActiveAlertList selectedId={selectedAlertId} onSelect={setSelectedAlertId} />
        </div>
        <div className="col-span-1 rounded-xl border border-[var(--bg-border)] bg-[var(--bg-card)] p-4">
          <AlertDetailPanel alertId={selectedAlertId} />
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <AlertSeverityChart />
          <AlertTrendChart />
        </div>
      </div>
      <AlertHistoryTable />
    </div>
  )
}

const AnalyticsPage = () => (
  <div className="flex flex-col gap-4">
    <AnalyticsOverviewBar />

    {/* Row 2: Trend + Risk */}
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2"><MultiParamTrendChart /></div>
      <div className="col-span-1"><PredictiveRiskPanel /></div>
    </div>

    {/* Row 3: Anomaly + Behavior + Recommendations */}
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1"><AnomalyDetection /></div>
      <div className="col-span-1"><BehaviorComparison /></div>
      <div className="col-span-1"><AnalyticsRecommendations /></div>
    </div>
  </div>
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true,       element: <DashboardPage />  },
      { path: 'analytics', element: <AnalyticsPage />  },
      { path: 'alerts',    element: <AlertsPage />     },
      { path: 'reports',   element: <div className="text-[var(--text-primary)] p-4">Reports — coming soon</div>  },
      { path: 'settings',  element: <div className="text-[var(--text-primary)] p-4">Settings — coming soon</div> },
    ],
  },
])