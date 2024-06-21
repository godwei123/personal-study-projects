export type ILocales = {
  [k: string]: any
}

export type ConfigContextType = {
  /**
   * 当前语言
   */
  locale?: string
  /**
   * 多语言
   */
  locales?: ILocales
  /**
   * 适老化模式
   */
  elderMode?: boolean
}
