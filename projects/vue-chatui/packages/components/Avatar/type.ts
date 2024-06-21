export type AvatarSize = 'sm' | 'md' | 'lg'

export type AvatarShape = 'circle' | 'square'
export interface AvatarProps {
  src?: string
  alt?: string
  url?: string
  size?: AvatarSize
  shape?: AvatarShape
}
