import type { Component } from 'vue'

export interface TagProps {
  as?: string | Component
  color?: 'primary' | 'success' | 'danger' | 'warning'
}
