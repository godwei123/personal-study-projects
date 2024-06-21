export type As = keyof HTMLElementTagNameMap

export interface FlexProps {
  as?: As
  center?: boolean
  inline?: boolean
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
  justifyContent?: FlexProps['justify']
  align?: 'flex-start' | 'flex-end' | 'center'
  alignItems?: FlexProps['align']
}

export interface FlexItemProps {
  flex?: string
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  order?: number
}
