import type { SensorCard, SystemEvent } from '@/shared/types/sensor.types'

export interface IDashboardService {
  getSensorCards(): Promise<SensorCard[]>
  getSystemEvents(): Promise<SystemEvent[]>
}