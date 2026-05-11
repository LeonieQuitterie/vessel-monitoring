import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Language = 'en' | 'vi'

interface LanguageStore {
  language: Language
  setLanguage: (lang: Language) => void
  toggle: () => void
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: 'en',
      setLanguage: (language) => set({ language }),
      toggle: () => set({ language: get().language === 'en' ? 'vi' : 'en' }),
    }),
    { name: 'vessel-language' }  // lưu vào localStorage — nhớ khi reload
  )
)