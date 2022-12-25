import React, { useEffect, useState } from 'react'
import { memo } from 'react'

interface FC {
  styles?: string
  name?: string
  content?: string
  stateInvert: string | null | number
  setStateInvert(value: string | null | number): void
}

export const SwitchThemeButton = memo(
  ({ styles, stateInvert, setStateInvert }: FC) => {
    const meta: any = document.querySelector('meta[name="color-scheme"]')
    useEffect(() => {
      if (localStorage.getItem('invert') == null) {
        if (meta.content == 'dark') {
          localStorage.setItem('invert', '0')
          setStateInvert(0)
        }
        if (meta.content == 'light') {
          localStorage.setItem('invert', '1')
          setStateInvert(1)
        }
      }
      if (localStorage.getItem('invert') == '1') {
        document.body.classList.remove('light-mode')
        document.body.classList.add('dark-mode')
      } else {
        document.body.classList.remove('dark-mode')
        document.body.classList.add('light-mode')
      }
    }, [])

    return (
      <img
        src="/src/assets/icons/light.svg"
        alt="light"
        className={styles}
        id="switchTheme"
        onClick={() => {
          console.log(localStorage.getItem('invert'))

          if (meta!.content === 'dark') {
            meta!.content = 'light'
            document.body.classList.remove('dark-mode')
            document.body.classList.add('light-mode')

            localStorage.removeItem('invert')
            localStorage.setItem('invert', '0')
            setStateInvert(0)
          } else {
            meta!.content = 'dark'
            document.body.classList.remove('light-mode')
            document.body.classList.add('dark-mode')

            localStorage.removeItem('invert')
            localStorage.setItem('invert', '1')
            setStateInvert(1)
          }
        }}
        style={{ filter: `invert(${Number(stateInvert)})` }}
      />
    )
  },
)
