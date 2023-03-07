import React, { useCallback, useContext, useEffect, useState } from 'react'
import { memo } from 'react'
import styles from './SwitchThemeButton.module.css'
import { ThemeContext } from '../../ThemeContext'

export const SwitchThemeButton = memo(() => {
  const {
    stateInvertColor,
    setStateInvertColor,
    windowsThemeIsDark,
    toggle,
    theme,
  } = useContext(ThemeContext)

  function invertColor() {
    switch (theme) {
      case 'dark':
        setStateInvertColor(1)
        break
      case 'light':
        setStateInvertColor(0)
        break
      case 'auto':
        windowsThemeIsDark ? setStateInvertColor(1) : setStateInvertColor(0)
        break
    }
  }
  useEffect(() => {
    invertColor()
  }, [theme])
  const changeTheme = useCallback(() => {
    if (theme === 'auto') {
      if (windowsThemeIsDark) {
        document.body.classList.remove('dark-mode')
        document.body.classList.add('light-mode')
      } else {
        document.body.classList.add('dark-mode')
        document.body.classList.remove('light-mode')
      }
    }
    if (theme === 'light') {
      document.body.classList.add('dark-mode')
      document.body.classList.remove('light-mode')
    }
    if (theme === 'dark') {
      document.body.classList.remove('dark-mode')
      document.body.classList.add('light-mode')
    }
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
        changeTheme()
      }}
      style={{
        filter: `invert(${stateInvertColor})`,
      }}
    />
  )
})
