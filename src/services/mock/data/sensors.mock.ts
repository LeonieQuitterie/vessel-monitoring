import type { SensorCard, SystemEvent } from '@/shared/types/sensor.types'

const generateSparkline = (base: number, count = 20) =>
  Array.from({ length: count }, (_, i) => ({
    timestamp: new Date(Date.now() - (count - i) * 60000).toISOString(),
    value: base + (Math.random() - 0.5) * base * 0.1,
  }))

export const mockSensorCards: SensorCard[] = [
  {
    id: 'temperature',
    label: 'Temperature',
    value: 71.2,
    unit: '°C',
    normalMin: 50,
    normalMax: 90,
    isWithinRange: true,
    sparkline: generateSparkline(71),
  },
  {
    id: 'vibration',
    label: 'Vibration',
    value: 0.18,
    unit: 'g',
    normalMin: 0,
    normalMax: 0.5,
    isWithinRange: true,
    sparkline: generateSparkline(0.18),
  },
  {
    id: 'humidity',
    label: 'Humidity',
    value: 62,
    unit: '%',
    normalMin: 30,
    normalMax: 80,
    isWithinRange: true,
    sparkline: generateSparkline(62),
  },
]

export const mockSystemEvents: SystemEvent[] = [
  {
    id: 'EVT-001',
    timestamp: '14:32:45',
    message: 'Data synchronized successfully',
    source: 'System',
    category: 'system',
  },
  {
    id: 'EVT-002',
    timestamp: '14:30:12',
    message: 'Sensor data received',
    source: 'Engine Room',
    category: 'sensor',
  },
  {
    id: 'EVT-003',
    timestamp: '14:28:05',
    message: 'Edge gateway heartbeat',
    source: 'Connectivity',
    category: 'connectivity',
  },
]