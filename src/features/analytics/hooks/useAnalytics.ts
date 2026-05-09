import { useQuery } from '@tanstack/react-query'
import { analyticsService } from '@/services'
import type { TimeRange } from '@/shared/types/common.types'

export const useAnalyticsOverview = () =>
    useQuery({
        queryKey: ['analytics', 'overview'],
        queryFn: () => analyticsService.getOverview(),
        staleTime: 30_000,
    })

export const useAnalyticsTrend = (range: TimeRange) =>
    useQuery({
        queryKey: ['analytics', 'trend', range],
        queryFn: () => analyticsService.getTrendData(range),
        staleTime: 30_000,
    })

export const useRiskItems = () =>
    useQuery({
        queryKey: ['analytics', 'risk'],
        queryFn: () => analyticsService.getRiskItems(),
        staleTime: 30_000,
    })

export const useAnomalyEvents = () =>
    useQuery({
        queryKey: ['analytics', 'anomalies'],
        queryFn: () => analyticsService.getAnomalyEvents(),
        staleTime: 30_000,
    })

export const useBehaviorMetrics = () =>
    useQuery({
        queryKey: ['analytics', 'behavior'],
        queryFn: () => analyticsService.getBehaviorMetrics(),
        staleTime: 30_000,
    })

export const useRecommendations = () =>
    useQuery({
        queryKey: ['analytics', 'recommendations'],
        queryFn: () => analyticsService.getRecommendations(),
        staleTime: 30_000,
    })