import { useQuery } from '@tanstack/react-query'
import { dashboardService } from '@/services'

export const useEngineHealth = () => {
  return useQuery({
    queryKey: ['dashboard', 'sensorCards'],
    queryFn: () => dashboardService.getSensorCards(),
    staleTime: 30_000,
    refetchInterval: 60_000,
  })
}

export const useSystemEvents = () => {
  return useQuery({
    queryKey: ['dashboard', 'systemEvents'],
    queryFn: () => dashboardService.getSystemEvents(),
    staleTime: 30_000,
  })
}