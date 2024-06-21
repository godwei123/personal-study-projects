import type { ILocales } from './type'
import { inject } from 'vue'
import defaultLocales from './locales'
import { configCtxSymbol, localSymbol } from '../../utils/constant'
const DEFAULT_LOCALE = 'zh_CN'

export const useLocale = (componentName?: string, fallback?: ILocales) => {
  const { locale, locales } = inject(localSymbol, { locale: '', locales: {} })
  const defaultStrings = (locale && defaultLocales[locale]) || defaultLocales[DEFAULT_LOCALE]
  let strings = { ...defaultStrings, ...locales }

  if (!locale && !locales && fallback) {
    strings = fallback
  } else if (componentName) {
    strings = strings[componentName] || {}
  }

  return {
    locale,
    trans: (key?: string) => (key ? strings[key] : strings)
  }
}
export const useConfig = () => inject(configCtxSymbol)
