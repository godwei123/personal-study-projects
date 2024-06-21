export interface CarouselProps {
  className?: string
  startIndex?: number
  draggable?: boolean
  clickDragThreshold?: number
  duration?: number
  easing?: string
  threshold?: number
  loop?: boolean
  rtl?: boolean
  autoPlay?: boolean
  interval?: number
  // pauseOnHover?: boolean;
  dots?: boolean
  onChange?: (activeIndex?: number) => void

  // Deprecated:
  autoplay?: boolean
  autoplaySpeed?: number
  indicators?: boolean
}

export interface CarouselHandle {
  goTo: (n: number) => void
  prev: () => void
  next: () => void
}

export interface State {
  first: boolean
  wrapWidth: number
  hover: boolean
  startX: number
  endX: number
  startY: number
  canMove: boolean | null
  pressDown: boolean
}

export type DragEvent = TouchEvent | MouseEvent

export interface CarouselItemProps {
  width: string
}
