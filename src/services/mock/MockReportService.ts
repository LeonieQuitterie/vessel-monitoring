import type { IReportService } from '../interfaces/IReportService'
import {
  mockReports,
  mockMaintenanceSchedules,
  mockMonthlyTrend,
  mockReportStats,
} from './data/reports.mock'

const delay = (ms = 400) => new Promise(r => setTimeout(r, ms))

export class MockReportService implements IReportService {
  async getReports()               { await delay(); return mockReports               }
  async getMaintenanceSchedules()  { await delay(); return mockMaintenanceSchedules  }
  async getMonthlyTrend()          { await delay(); return mockMonthlyTrend          }
  async getReportStats()           { await delay(); return mockReportStats           }
}