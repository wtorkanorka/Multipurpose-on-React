import React, { useContext, useEffect, useState } from 'react'
import { memo } from 'react'
import styles from './SwitchThemeButton.module.css'
import { ThemeContext } from '../../ThemeContext'

export const SwitchThemeButton = memo(() => {
  const { theme } = useContext(ThemeContext)
  const { toggle } = useContext(ThemeContext)
  const [stateInvertColor, setStateInvertColor] = useState<number>(0)
  const mql = window.matchMedia('(prefers-color-scheme: dark)')

  function invertColor() {
    switch (theme) {
      case 'dark':
        setStateInvertColor(1)
        break
      case 'light':
        setStateInvertColor(0)
        break
      case 'auto':
        mql.matches ? setStateInvertColor(1) : setStateInvertColor(0)
        break
    }
  }
  useEffect(() => {
    invertColor()
  }, [theme])
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
        } else if (theme == 'dark') {
          document.body.classList.remove('dark-mode')
          document.body.classList.add('light-mode')
        } else {
          document.body.classList.remove('dark-mode')
          document.body.classList.remove('light-mode')
        }
      }}
      style={{
        filter: `invert(${stateInvertColor})`,
      }}
    />
  )
})
