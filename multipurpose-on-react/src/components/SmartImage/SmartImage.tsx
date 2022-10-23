import React from 'react'

export default function SmartImage({ path }: any) {
  return (
    <picture>
      <source srcSet={`${path}.avif`} type={`${path}/avif`} />
      <source srcSet={`${path}.jpg`} type={`${path}/jpg`} />
      <source srcSet={`${path}.webp`} type={`${path}/webp`} />
      <img src={`${path}.avif`} decoding="async" loading="lazy" alt="image" />
    </picture>
  )
}
