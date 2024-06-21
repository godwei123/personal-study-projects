import type { Component } from 'vue'

export interface TextProps {
  as?: string | Component
  align?: 'left' | 'center' | 'right' | 'justify'
  breakWord?: boolean
  truncate?: boolean | number
}
