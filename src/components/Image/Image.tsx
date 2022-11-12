import React, { PropsWithChildren } from 'react'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface Types {
  path?: string
}
type Props = Types & PropsWithChildren<HTMLAttributes<HTMLPictureElement>>
export default function Image({ path, children, ...rest }: Props) {
  return (
    <picture {...rest}>
      <source srcSet={`/src/assets/${path}.avif`} type="image/avif" />
      <source srcSet={`/src/assets/${path}.jpg`} type="image/jpg" />
      <source srcSet={`/src/assets/${path}.webp`} type="image/webp" />
      <img src={`/src/assets/${path}.jpg`} alt={`${path}`} />
    </picture>
  )
}
