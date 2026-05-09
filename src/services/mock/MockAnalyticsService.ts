import type { IAnalyticsService } from '../interfaces/IAnalyticsService'
import type { TimeRange } from '@/shared/types/common.types'
import {
    mockAnalyticsOverview,
    mockTrendData,
    mockRiskItems,
    mockAnomalyEvents,
    mockBehaviorMetrics,
    mockRecommendations,
} from './data/analytics.mock'

const delay = (ms = 400) => new Promise(r => setTimeout(r, ms))

export class MockAnalyticsService implements IAnalyticsService {
    async getOverview() { await delay(); return mockAnalyticsOverview }
    async getTrendData(_range: TimeRange) { await delay(); return mockTrendData }
    async getRiskItems() { await delay(); return mockRiskItems }
    async getAnomalyEvents() { await delay(); return mockAnomalyEvents }
    async getBehaviorMetrics() { await delay(); return mockBehaviorMetrics }
    async getRecommendations() { await delay(); return mockRecommendations }
}