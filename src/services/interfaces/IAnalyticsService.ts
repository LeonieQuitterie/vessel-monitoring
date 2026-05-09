import type { AnalyticsOverview, TrendDataPoint, RiskItem, AnomalyEvent, BehaviorMetric, Recommendation } from '@/features/analytics/types/analytics.types'
import type { TimeRange } from '@/shared/types/common.types'

export interface IAnalyticsService {
  getOverview(): Promise<AnalyticsOverview>
  getTrendData(range: TimeRange): Promise<TrendDataPoint[]>
  getRiskItems(): Promise<RiskItem[]>
  getAnomalyEvents(): Promise<AnomalyEvent[]>
  getBehaviorMetrics(): Promise<BehaviorMetric[]>
  getRecommendations(): Promise<Recommendation[]>
}