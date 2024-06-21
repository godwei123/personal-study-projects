import type { VNode } from 'vue'

export type ScrollViewEffect = 'slide' | 'fade' | ''

export interface ScrollViewItemProps {
  item: any
  effect?: ScrollViewEffect
}
export type ScrollViewProps<T> = Pick<ScrollViewItemProps, 'effect'> & {
  data: Array<T>
  renderItem: (item: T, index: number) => VNode
  className?: string
  fullWidth?: boolean
  scrollX?: boolean
  itemKey?: string | ((item: T, index: number) => string)
  onScroll?: (event: UIEvent<HTMLDivElement, UIEvent>) => void
}

export interface ScrollViewHandle {
  scrollTo: (coord: { x?: number; y?: number }) => void
}
