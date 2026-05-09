export interface SensorModule {
  name: string
  id: string
  status: 'online' | 'offline'
}

export interface GatewayInfo {
  gatewayId: string
  firmwareVersion: string
  status: 'connected' | 'disconnected'
  network: string
}

export interface ThresholdConfig {
  temperatureMin: number
  temperatureMax: number
  vibrationMin: number
  vibrationMax: number
  humidityMin: number
  humidityMax: number
  riskSensitivity: 'low' | 'medium' | 'high'
}

export interface UserRole {
  role: 'Admin' | 'Operator' | 'Technician'
  description: string
  count: number
}

export interface NotificationConfig {
  emailEnabled: boolean
  smsEnabled: boolean
  dashboardAlertsEnabled: boolean
  escalationMinutes: number
}

export interface SystemPreferences {
  timezone: string
  dataSyncInterval: string
  language: string
  theme: string
}