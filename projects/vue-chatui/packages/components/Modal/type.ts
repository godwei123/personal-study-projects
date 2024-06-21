import type { ButtonProps } from '../Button/type'

export interface ModalProps {
  active?: boolean
  baseClass?: string
  className?: string
  title?: string
  titleId?: string
  showClose?: boolean
  autoFocus?: boolean
  backdrop?: boolean | 'static'
  height?: number | string
  overflow?: boolean
  actions?: ButtonProps[]
  vertical?: boolean
  btnVariant?: ButtonProps['variant']
  bgColor?: string
}
