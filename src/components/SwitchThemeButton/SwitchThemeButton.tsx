import React, { useContext, useEffect, useState } from 'react'
import { memo } from 'react'
import styles from './SwitchThemeButton.module.css'
import { ThemeContext } from '../../ThemeContext'

interface FC {
  styles?: string
  name?: string
  content?: string
}

export const SwitchThemeButton = memo(() => {
  const meta: any = document.querySelector('meta[name="color-scheme"]')
  const { theme } = useContext(ThemeContext)
  const { toggle } = useContext(ThemeContext)
  const mql = window.matchMedia('(prefers-color-scheme: dark)')

  function invertColor() {
    switch (theme) {
      case 'light':
        return 0
      case 'dark':
        return 1
      case 'auto':
        mql ? 1 : 0
        break
    }
  }
  return (
    <img
      className={styles['theme-button']}
      src={`/src/assets/icons/${
        theme == 'auto'
          ? 'auto-theme.png'
          : theme == 'light'
          ? 'sun.png'
          : 'night.png'
      }`}
      alt="light"
      id="switchTheme"
      onClick={() => {
        toggle()
        if (theme == 'light') {
          document.body.classList.add('dark-mode')
          document.body.classList.remove('light-mode')
        } else {
          document.body.classList.remove('dark-mode')
          document.body.classList.add('light-mode')
        }
      }}
      style={{
        filter: `invert(${invertColor()})`,
      }}
    />
  )
})
