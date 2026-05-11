import { useLanguageStore } from '@/store/useLanguageStore'
import { en } from '@/shared/constants/i18n/en'
import { vi } from '@/shared/constants/i18n/vi'

export const useTranslation = () => {
  const language = useLanguageStore(s => s.language)
  return {
    t: language === 'vi' ? vi : en,
    language,
  }
}