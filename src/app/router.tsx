import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    // element: <AppShell /> sẽ thêm sau
    children: [
      { index: true,      element: <div>Dashboard</div> },
      { path: 'analytics', element: <div>Analytics</div> },
      { path: 'alerts',    element: <div>Alerts</div> },
      { path: 'reports',   element: <div>Reports</div> },
      { path: 'settings',  element: <div>Settings</div> },
    ],
  },
])