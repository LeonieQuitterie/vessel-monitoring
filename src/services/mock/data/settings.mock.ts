import type { SensorModule, GatewayInfo, ThresholdConfig, UserRole, NotificationConfig, SystemPreferences } from '@/features/settings/types/settings.types'

export const mockSensorModules: SensorModule[] = [
  { name: 'Temperature Sensor', id: 'TMP-01', status: 'online' },
  { name: 'Vibration Sensor',   id: 'VIB-03', status: 'online' },
  { name: 'Humidity Sensor',    id: 'HUM-02', status: 'online' },
]

export const mockGatewayInfo: GatewayInfo = {
  gatewayId: 'EGW-01-ESP32',
  firmwareVersion: 'v1.2.3',
  status: 'connected',
  network: 'SeaSense_Network',
}

export const mockThresholdConfig: ThresholdConfig = {
  temperatureMin: 50,
  temperatureMax: 80,
  vibrationMin: 0,
  vibrationMax: 0.5,
  humidityMin: 30,
  humidityMax: 80,
  riskSensitivity: 'medium',
}

export const mockUserRoles: UserRole[] = [
  { role: 'Admin',      description: 'Full system access',      count: 1 },
  { role: 'Operator',   description: 'Monitoring & alerts',     count: 1 },
  { role: 'Technician', description: 'Maintenance & sensors',   count: 1 },
]

export const mockNotificationConfig: NotificationConfig = {
  emailEnabled: true,
  smsEnabled: true,
  dashboardAlertsEnabled: true,
  escalationMinutes: 30,
}

export const mockSystemPreferences: SystemPreferences = {
  timezone: 'UTC (Coordinated Universal Time)',
  dataSyncInterval: '30 seconds',
  language: 'English (US)',
  theme: 'Ocean Dark',
}