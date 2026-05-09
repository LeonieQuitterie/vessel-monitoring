import { createBrowserRouter } from 'react-router-dom'
import { AppShell } from '@/shared/components/layout/AppShell'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true,       element: <div className="text-[var(--text-primary)] p-4">Dashboard — coming soon</div> },
      { path: 'analytics', element: <div className="text-[var(--text-primary)] p-4">Analytics — coming soon</div> },
      { path: 'alerts',    element: <div className="text-[var(--text-primary)] p-4">Alerts — coming soon</div>    },
      { path: 'reports',   element: <div className="text-[var(--text-primary)] p-4">Reports — coming soon</div>   },
      { path: 'settings',  element: <div className="text-[var(--text-primary)] p-4">Settings — coming soon</div>  },
    ],
  },
])