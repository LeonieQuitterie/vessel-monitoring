import { create } from 'zustand'

interface SystemStore {
  vessel: {
    name: string
    imo: string
    status: 'ACTIVE' | 'INACTIVE' | 'MAINTENANCE'
  }
  setVessel: (vessel: SystemStore['vessel']) => void
}

export const useSystemStore = create<SystemStore>((set) => ({
  vessel: {
    name: 'Oceanic Voyager',   // ← đổi ở đây là xong
    imo: '9876543',
    status: 'ACTIVE',
  },
  setVessel: (vessel) => set({ vessel }),
}))