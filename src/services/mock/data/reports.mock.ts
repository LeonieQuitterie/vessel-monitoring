import type { Report, MaintenanceSchedule, MonthlyTrendPoint, ReportStats } from '@/features/reports/types/report.types'

export const mockReports: Report[] = [
  { id: 'RPT-001', name: 'Engine Performance Report',   dateGenerated: '2024-05-27 14:15', type: 'Performance',  status: 'completed' },
  { id: 'RPT-002', name: 'Vibration Analysis Report',   dateGenerated: '2024-05-27 10:30', type: 'Condition',    status: 'completed' },
  { id: 'RPT-003', name: 'Fuel Efficiency Summary',     dateGenerated: '2024-05-26 18:45', type: 'Efficiency',   status: 'completed' },
  { id: 'RPT-004', name: 'Maintenance Summary Report',  dateGenerated: '2024-05-26 09:00', type: 'Maintenance',  status: 'completed' },
  { id: 'RPT-005', name: 'Emission Compliance Report',  dateGenerated: '2024-05-25 16:20', type: 'Compliance',   status: 'completed' },
  { id: 'RPT-006', name: 'Daily Operations Report',     dateGenerated: '2024-05-25 08:00', type: 'Operations',   status: 'completed' },
]

export const mockMaintenanceSchedules: MaintenanceSchedule[] = [
  { id: 'MNT-001', title: 'Main Engine Overhaul',          scheduledDate: 'Jun 05, 2024', dueInDays: 9,  icon: 'engine' },
  { id: 'MNT-002', title: 'Fuel Injector Inspection',      scheduledDate: 'Jun 10, 2024', dueInDays: 14, icon: 'fuel' },
  { id: 'MNT-003', title: 'Ultrasonic Thickness Test',     scheduledDate: 'Jun 15, 2024', dueInDays: 19, icon: 'ultrasonic' },
  { id: 'MNT-004', title: 'Life Raft & Safety Equipment Check', scheduledDate: 'Jun 20, 2024', dueInDays: 24, icon: 'safety' },
]

export const mockMonthlyTrend: MonthlyTrendPoint[] = [
  { month: "Dec '23", maintenanceCases: 18, incidents: 6 },
  { month: "Jan '24", maintenanceCases: 22, incidents: 8 },
  { month: "Feb '24", maintenanceCases: 20, incidents: 10 },
  { month: "Mar '24", maintenanceCases: 26, incidents: 7 },
  { month: "Apr '24", maintenanceCases: 23, incidents: 9 },
  { month: "May '24", maintenanceCases: 19, incidents: 5 },
]

export const mockReportStats: ReportStats = {
  totalMaintenanceCases: 136,
  totalIncidents: 45,
  avgResolutionHours: 12.4,
}