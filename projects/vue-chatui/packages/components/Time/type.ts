export type IDate = number | string | Date

export type DateFormats = {
  [p: string]: string
}

export interface TimeLocale {
  weekdays: string[]
  formats: DateFormats
}

export interface TimeProps {
  date: IDate
}
