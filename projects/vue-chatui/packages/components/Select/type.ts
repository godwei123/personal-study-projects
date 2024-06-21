import type { SelectHTMLAttributes } from 'vue'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string
  variant?: InputVariant
}
