import React, { memo, PropsWithChildren } from 'react'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface Types {
  path?: string
  styleParams?: any
}
type Props = Types & PropsWithChildren<HTMLAttributes<HTMLPictureElement>>
export const Image = memo(({ styleParams, path, children, ...rest }: Props) => {
  return (
    <picture {...rest}>
      <source srcSet={`../src/assets/${path}.avif`} type="image/avif" />
      <source srcSet={`../src/assets/${path}.jpg`} type="image/jpg" />
      <source srcSet={`../src/assets/${path}.webp`} type="image/webp" />
      <img
        src={`../src/assets/${path}.jpg`}
        alt={`${path}`}
        style={styleParams}
      />
    </picture>
  )
})
