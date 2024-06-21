import type { HTMLAttributes, VNode } from 'vue'

export type CardSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  size?: CardSize
  fluid?: boolean | 'order'
}

export interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  direction?: 'column' | 'row'
}

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

export interface CardMediaProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  aspectRatio?: 'square' | 'wide'
  color?: string
  image?: string
}

export interface CardTextProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

export interface CardTitleProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  title?: string
  subtitle?: VNode
  center?: boolean
}
