import type { Report, MaintenanceSchedule, MonthlyTrendPoint, ReportStats } from '@/features/reports/types/report.types'

export const mockReports: Report[] = [
  { id: 'RPT-001', name: { en: 'Engine Performance Report',  vi: 'Báo cáo hiệu suất động cơ'     }, dateGenerated: '2024-05-27 14:15', type: 'Performance', status: 'completed' },
  { id: 'RPT-002', name: { en: 'Vibration Analysis Report',  vi: 'Báo cáo phân tích rung động'   }, dateGenerated: '2024-05-27 10:30', type: 'Condition',   status: 'completed' },
  { id: 'RPT-003', name: { en: 'Fuel Efficiency Summary',    vi: 'Tóm tắt hiệu quả nhiên liệu'  }, dateGenerated: '2024-05-26 18:45', type: 'Efficiency',  status: 'completed' },
  { id: 'RPT-004', name: { en: 'Maintenance Summary Report', vi: 'Báo cáo tóm tắt bảo trì'      }, dateGenerated: '2024-05-26 09:00', type: 'Maintenance', status: 'completed' },
  { id: 'RPT-005', name: { en: 'Emission Compliance Report', vi: 'Báo cáo tuân thủ khí thải'    }, dateGenerated: '2024-05-25 16:20', type: 'Compliance',  status: 'completed' },
  { id: 'RPT-006', name: { en: 'Daily Operations Report',    vi: 'Báo cáo vận hành hàng ngày'   }, dateGenerated: '2024-05-25 08:00', type: 'Operations',  status: 'completed' },
  { id: 'RPT-007', name: { en: 'Bearing Inspection Report',  vi: 'Báo cáo kiểm tra bạc đạn'     }, dateGenerated: '2024-05-24 14:00', type: 'Condition',   status: 'completed' },
  { id: 'RPT-008', name: { en: 'Power Consumption Analysis', vi: 'Phân tích tiêu thụ điện năng' }, dateGenerated: '2024-05-24 09:30', type: 'Efficiency',  status: 'completed' },
  { id: 'RPT-009', name: { en: 'Weekly Safety Report',       vi: 'Báo cáo an toàn hàng tuần'    }, dateGenerated: '2024-05-23 17:00', type: 'Compliance',  status: 'completed' },
  { id: 'RPT-010', name: { en: 'Lube Oil System Report',     vi: 'Báo cáo hệ thống dầu bôi trơn' }, dateGenerated: '2024-05-23 11:15', type: 'Maintenance', status: 'completed' },
  { id: 'RPT-011', name: { en: 'Hull Inspection Summary',    vi: 'Tóm tắt kiểm tra thân tàu'    }, dateGenerated: '2024-05-22 15:45', type: 'Condition',   status: 'scheduled' },
  { id: 'RPT-012', name: { en: 'Monthly Performance Report', vi: 'Báo cáo hiệu suất hàng tháng' }, dateGenerated: '2024-05-22 08:00', type: 'Performance', status: 'completed' },
]

export const mockMaintenanceSchedules: MaintenanceSchedule[] = [
  { id: 'MNT-001', title: { en: 'Main Engine Overhaul',               vi: 'Đại tu động cơ chính'              }, scheduledDate: 'Jun 05, 2024', dueInDays: 9,  icon: 'engine'     },
  { id: 'MNT-002', title: { en: 'Fuel Injector Inspection',           vi: 'Kiểm tra kim phun nhiên liệu'      }, scheduledDate: 'Jun 10, 2024', dueInDays: 14, icon: 'fuel'       },
  { id: 'MNT-003', title: { en: 'Ultrasonic Thickness Test',          vi: 'Kiểm tra độ dày bằng siêu âm'     }, scheduledDate: 'Jun 15, 2024', dueInDays: 19, icon: 'ultrasonic' },
  { id: 'MNT-004', title: { en: 'Life Raft & Safety Equipment Check', vi: 'Kiểm tra bè cứu sinh & thiết bị an toàn' }, scheduledDate: 'Jun 20, 2024', dueInDays: 24, icon: 'safety' },
]

export const mockMonthlyTrend: MonthlyTrendPoint[] = [
  { month: "Dec '23", maintenanceCases: 18, incidents: 6  },
  { month: "Jan '24", maintenanceCases: 22, incidents: 8  },
  { month: "Feb '24", maintenanceCases: 20, incidents: 10 },
  { month: "Mar '24", maintenanceCases: 26, incidents: 7  },
  { month: "Apr '24", maintenanceCases: 23, incidents: 9  },
  { month: "May '24", maintenanceCases: 19, incidents: 5  },
]

export const mockReportStats: ReportStats = {
  totalMaintenanceCases: 136,
  totalIncidents:        45,
  avgResolutionHours:    12.4,
}