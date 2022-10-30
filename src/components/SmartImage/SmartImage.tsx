import React from 'react'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
// type props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
interface Types {
  path?: string
  children?: React.ReactNode
}
export default function SmartImage({ path }: Types) {
  return (
    <picture>
      <source srcSet={`/src/assets/${path}.avif`} type="image/avif" />
      <source srcSet={`/src/assets/${path}.jpg`} type="image/jpg" />
      <source srcSet={`/src/assets/${path}.webp`} type="image/webp" />
      <img src={`/src/assets/${path}.jpg`} alt={`${path}`} />
    </picture>
  )
}
