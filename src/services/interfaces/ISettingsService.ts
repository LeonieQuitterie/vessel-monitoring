import type {
  SensorModule, GatewayInfo, ThresholdConfig,
  UserRole, NotificationConfig, SystemPreferences,
} from '@/features/settings/types/settings.types'

export interface ISettingsService {
  getDeviceConfig(): Promise<{ sensors: SensorModule[]; gateway: GatewayInfo }>
  getThresholdConfig(): Promise<ThresholdConfig>
  getNotificationConfig(): Promise<NotificationConfig>
  getUserRoles(): Promise<UserRole[]>
  getSystemPreferences(): Promise<SystemPreferences>
}