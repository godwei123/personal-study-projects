import type { ImgHTMLAttributes } from 'vue'

export interface ImageProps extends /* @vue-ignore */ ImgHTMLAttributes {
  className?: string
  src: string
  lazy?: boolean
  fluid?: boolean
}
