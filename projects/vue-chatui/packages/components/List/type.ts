import type { Component, VNode } from 'vue'

export interface ListProps {
  bordered?: boolean
}

interface ListItemPropsBase {
  as?: string | Component
  content?: VNode
  rightIcon?: string
}

interface ListItemPropsWithLink extends ListItemPropsBase {
  as: 'a'
  href: string
}

export type ListItemProps = ListItemPropsBase | ListItemPropsWithLink
