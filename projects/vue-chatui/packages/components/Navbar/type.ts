export interface NavbarProps {
  title: string
  className?: string
  logo?: string
  leftContent?: IconButtonProps
  rightContent?: IconButtonProps[]
  desc?: React.ReactNode
  align?: 'left' | 'center'
}
