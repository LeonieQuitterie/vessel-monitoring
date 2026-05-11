import type { Alert, AlertHistoryEntry, AlertSummary } from '@/features/alerts/types/alert.types'

export const mockAlerts: Alert[] = [
  {
    id: 'ALT-001',
    severity: 'critical',
    title: {
      en: 'Possible bearing failure detected',
      vi: 'Phát hiện khả năng hỏng bạc đạn',
    },
    subsystem: {
      en: 'Main Engine · Bearing Temperature',
      vi: 'Động cơ chính · Nhiệt độ bạc đạn',
    },
    component: 'Main Engine - Bearing #2',
    timestamp: '2024-05-27T14:28:15Z',
    timeAgo: '2 min ago',
    status: 'active',
    probableCause: {
      en: 'Abnormal vibration levels and rising temperature on port side main engine bearing #2. Possible lubrication issue or wear detected.',
      vi: 'Mức rung động bất thường và nhiệt độ tăng tại bạc đạn số 2 động cơ chính mạn trái. Có thể do vấn đề bôi trơn hoặc mài mòn.',
    },
    recommendedActions: {
      en: [
        'Reduce engine load to minimum safe level.',
        'Inspect bearing #2 for wear or damage.',
        'Verify lubrication flow and oil quality.',
        'Monitor vibration and temperature closely.',
        'Prepare for maintenance if condition persists.',
      ],
      vi: [
        'Giảm tải động cơ xuống mức an toàn tối thiểu.',
        'Kiểm tra bạc đạn số 2 để phát hiện mòn hoặc hư hỏng.',
        'Kiểm tra lưu lượng bôi trơn và chất lượng dầu.',
        'Theo dõi chặt chẽ rung động và nhiệt độ.',
        'Chuẩn bị bảo trì nếu tình trạng tiếp tục.',
      ],
    },
  },
  {
    id: 'ALT-002',
    severity: 'warning',
    title: {
      en: 'High exhaust gas temperature',
      vi: 'Nhiệt độ khí thải cao',
    },
    subsystem: {
      en: 'Engine Room · Exhaust System',
      vi: 'Buồng máy · Hệ thống xả khí',
    },
    component: 'Exhaust Manifold',
    timestamp: '2024-05-27T14:22:00Z',
    timeAgo: '8 min ago',
    status: 'acknowledged',
    probableCause: {
      en: 'Exhaust temperature exceeding normal operating range.',
      vi: 'Nhiệt độ khí thải vượt ngưỡng hoạt động bình thường.',
    },
    recommendedActions: {
      en: [
        'Check air filter for blockage.',
        'Inspect fuel injectors.',
        'Reduce engine load temporarily.',
      ],
      vi: [
        'Kiểm tra bộ lọc khí có bị tắc không.',
        'Kiểm tra kim phun nhiên liệu.',
        'Tạm thời giảm tải động cơ.',
      ],
    },
  },
  {
    id: 'ALT-003',
    severity: 'info',
    title: {
      en: 'Bilge pump 2 started automatically',
      vi: 'Bơm hầm tàu số 2 tự động khởi động',
    },
    subsystem: {
      en: 'Deck Equipment · Bilge System',
      vi: 'Thiết bị boong · Hệ thống hầm tàu',
    },
    component: 'Bilge Pump 2',
    timestamp: '2024-05-27T14:15:00Z',
    timeAgo: '15 min ago',
    status: 'resolved',
    probableCause: {
      en: 'Water level triggered automatic pump activation.',
      vi: 'Mực nước kích hoạt bơm tự động.',
    },
    recommendedActions: {
      en: [
        'Monitor bilge level.',
        'Check for unusual water ingress.',
      ],
      vi: [
        'Theo dõi mực nước hầm tàu.',
        'Kiểm tra rò rỉ nước bất thường.',
      ],
    },
  },
  {
    id: 'ALT-004',
    severity: 'warning',
    title: {
      en: 'Low lube oil pressure',
      vi: 'Áp suất dầu bôi trơn thấp',
    },
    subsystem: {
      en: 'Main Engine · Lube Oil System',
      vi: 'Động cơ chính · Hệ thống dầu bôi trơn',
    },
    component: 'Lube Oil Pump',
    timestamp: '2024-05-27T14:08:00Z',
    timeAgo: '22 min ago',
    status: 'in_progress',
    probableCause: {
      en: 'Lube oil pressure below threshold.',
      vi: 'Áp suất dầu bôi trơn dưới ngưỡng cho phép.',
    },
    recommendedActions: {
      en: [
        'Check oil level.',
        'Inspect oil pump.',
        'Check for leaks.',
      ],
      vi: [
        'Kiểm tra mức dầu.',
        'Kiểm tra bơm dầu.',
        'Kiểm tra rò rỉ dầu.',
      ],
    },
  },
  {
    id: 'ALT-005',
    severity: 'info',
    title: {
      en: 'Weather update received',
      vi: 'Đã nhận cập nhật thời tiết',
    },
    subsystem: {
      en: 'Navigation · Weather System',
      vi: 'Hàng hải · Hệ thống thời tiết',
    },
    component: 'Weather Module',
    timestamp: '2024-05-27T14:00:00Z',
    timeAgo: '30 min ago',
    status: 'resolved',
    probableCause: {
      en: 'Scheduled weather data sync.',
      vi: 'Đồng bộ dữ liệu thời tiết theo lịch.',
    },
    recommendedActions: {
      en: ['Review updated weather forecast.'],
      vi: ['Xem xét dự báo thời tiết đã cập nhật.'],
    },
  },
]

export const mockAlertSummary: AlertSummary = {
  total: 32,
  critical: 5,
  warnings: 17,
  informational: 10,
  resolved24h: 18,
}

export const mockAlertHistory: AlertHistoryEntry[] = [
  {
    id: 'HIS-001',
    time: '14:28:15',
    event: {
      en: 'Possible bearing failure detected',
      vi: 'Phát hiện khả năng hỏng bạc đạn',
    },
    severity: 'critical',
    triggeredBy: 'Sensor: Vibration – Bearing #2',
    escalationLevel: 2,
    assignedTo: 'John Peterson',
    status: 'active',
  },
  {
    id: 'HIS-002',
    time: '14:28:45',
    event: {
      en: 'Alert acknowledged',
      vi: 'Đã xác nhận cảnh báo',
    },
    severity: 'critical',
    triggeredBy: 'John Peterson',
    escalationLevel: 2,
    assignedTo: 'John Peterson',
    status: 'acknowledged',
  },
  {
    id: 'HIS-003',
    time: '14:30:10',
    event: {
      en: 'Technician assigned',
      vi: 'Đã phân công kỹ thuật viên',
    },
    severity: 'critical',
    triggeredBy: 'John Peterson',
    escalationLevel: 2,
    assignedTo: 'Mark Williams',
    status: 'assigned',
  },
  {
    id: 'HIS-004',
    time: '14:30:50',
    event: {
      en: 'Condition monitoring in progress',
      vi: 'Đang theo dõi tình trạng',
    },
    severity: 'info',
    triggeredBy: 'System',
    escalationLevel: 2,
    assignedTo: 'Mark Williams',
    status: 'in_progress',
  },
  {
    id: 'HIS-005',
    time: '14:45:00',
    event: {
      en: 'Awaiting inspection',
      vi: 'Đang chờ kiểm tra',
    },
    severity: 'info',
    triggeredBy: 'Mark Williams',
    escalationLevel: 2,
    assignedTo: 'Mark Williams',
    status: 'pending',
  },
]