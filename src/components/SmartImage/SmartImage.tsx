import React from 'react'

export default function SmartImage({ path }: any) {
   return (
      <picture>
         <source srcSet={`${path}.avif`} type="image/avif" />
         <source srcSet={`${path}.jpg`} type="image/jpg" />
         <source srcSet={`${path}.webp`} type="image/webp" />
         <img src={`${path}.jpg`} alt={`${path}`} />
      </picture>
   )
}
