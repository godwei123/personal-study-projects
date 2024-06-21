import type { CSSProperties } from 'vue'

export type VideoProps = {
  src?: string
  cover?: string
  duration?: string | number
  style?: CSSProperties
  videoRef?: HTMLVideoElement
}
