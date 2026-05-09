import type { Status } from './common.types'

export interface Vessel {
  id: string
  name: string
  imo: string
  status: Status
}