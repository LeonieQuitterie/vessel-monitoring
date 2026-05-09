import type { IDashboardService } from '../interfaces/IDashboardService'
import { mockSensorCards, mockSystemEvents } from './data/sensors.mock'

const delay = (ms = 400) => new Promise(r => setTimeout(r, ms))

export class MockDashboardService implements IDashboardService {
  async getSensorCards()  { await delay(); return mockSensorCards }
  async getSystemEvents() { await delay(); return mockSystemEvents }
}