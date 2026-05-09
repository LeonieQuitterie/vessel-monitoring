import { create } from 'zustand'

interface AlertStore {
  selectedAlertId: string | null
  setSelectedAlertId: (id: string | null) => void
}

export const useAlertStore = create<AlertStore>((set) => ({
  selectedAlertId: null,
  setSelectedAlertId: (id) => set({ selectedAlertId: id }),
}))