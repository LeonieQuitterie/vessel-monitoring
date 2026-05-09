import { MockDashboardService } from './mock/MockDashboardService'
import { MockAlertService }     from './mock/MockAlertService'
import { MockAnalyticsService } from './mock/MockAnalyticsService'
import { MockReportService }    from './mock/MockReportService'

const isMock = import.meta.env.VITE_USE_MOCK === 'true'

export const dashboardService = isMock ? new MockDashboardService() : new MockDashboardService()
export const alertService     = isMock ? new MockAlertService()     : new MockAlertService()
export const analyticsService = isMock ? new MockAnalyticsService() : new MockAnalyticsService()
export const reportService    = isMock ? new MockReportService()    : new MockReportService()