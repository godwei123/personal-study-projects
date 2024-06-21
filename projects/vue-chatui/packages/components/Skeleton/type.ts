import type { CSSProperties } from 'vue'

export interface SkeletonProps {
  className?: string;
  w?: CSSProperties['width']
  h?: CSSProperties['height']
  mb?: CSSProperties['marginBottom']
  style?: CSSProperties
  r?: 'sm' | 'md' | 'xl' | 'none'
}
