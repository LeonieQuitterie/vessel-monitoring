export interface LocalizedString {
  en: string
  vi: string
}

export interface SensorModule {
  name: LocalizedString
  id: string                          // mã kỹ thuật — không dịch
  status: 'online' | 'offline'
}

export interface GatewayInfo {
  gatewayId: string                   // mã kỹ thuật — không dịch
  firmwareVersion: string             // version — không dịch
  status: 'connected' | 'disconnected'
  network: string                     // tên mạng — không dịch
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
  role: 'Admin' | 'Operator' | 'Technician'  // role — không dịch
  description: LocalizedString
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