export type InputVariant = 'outline' | 'filled' | 'flushed'

export type InputRef = HTMLInputElement | HTMLTextAreaElement

export interface InputProps {
  variant?: InputVariant
  rows?: number
  minRows?: number
  maxRows?: number
  maxLength?: number
  showCount?: boolean
  multiline?: boolean
  autoSize?: boolean
  modelValue?: string | number
}
