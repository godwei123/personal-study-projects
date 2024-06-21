import type { InputHTMLAttributes } from 'vue'

export type RadioValue = string | number | undefined

export type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  value?: RadioValue
  label?: RadioValue
}

export type RadioGroupProps = {
  className?: string
  options: RadioProps[]
  value: RadioValue
  name?: string
  disabled?: boolean
  block?: boolean
}
