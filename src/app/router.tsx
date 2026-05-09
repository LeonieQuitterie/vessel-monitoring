import { createBrowserRouter } from 'react-router-dom'
import { AppShell } from '@/shared/components/layout/AppShell'
import {
    SystemOverviewBar,
    EngineHealthOverview,
    TrendAnalysisChart,
    SystemFlowDiagram,
    RecommendedActions,
} from '@/features/dashboard'

const DashboardPage = () => (
    <div className="flex flex-col gap-4">
        <SystemOverviewBar />
        <EngineHealthOverview />
        <TrendAnalysisChart />
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <SystemFlowDiagram />
            </div>
            <div className="col-span-1">
                <RecommendedActions />
            </div>
        </div>
    </div>
)

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppShell />,
        children: [
            { index: true, element: <DashboardPage /> },
            { path: 'analytics', element: <div className="text-[var(--text-primary)] p-4">Analytics — coming soon</div> },
            { path: 'alerts', element: <div className="text-[var(--text-primary)] p-4">Alerts — coming soon</div> },
            { path: 'reports', element: <div className="text-[var(--text-primary)] p-4">Reports — coming soon</div> },
            { path: 'settings', element: <div className="text-[var(--text-primary)] p-4">Settings — coming soon</div> },
        ],
    },
])