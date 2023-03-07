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
      <source
        srcSet={`/Multipurpose-on-React/src/assets/${path}.avif`}
        type="image/avif"
      />
      <source
        srcSet={`/Multipurpose-on-React/src/assets/${path}.jpg`}
        type="image/jpg"
      />
      <source
        srcSet={`/Multipurpose-on-React/src/assets/${path}.webp`}
        type="image/webp"
      />
      <img
        src={`/Multipurpose-on-React/src/assets/${path}.jpg`}
        alt={`${path}`}
        style={styleParams}
      />
    </picture>
  )
})
