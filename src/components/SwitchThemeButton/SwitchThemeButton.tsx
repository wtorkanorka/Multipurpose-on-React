import React, { useEffect, useState } from 'react'
import { useMemo } from 'react'
interface Component {
  styles: string
}
export default function SwitchThemeButton({ styles }: Component) {
  return (
    <img
      src="/src/assets/icons/light.svg"
      alt="light"
      className={styles}
      id="switchTheme"
      onClick={() => {
        const meta = document.querySelector('meta[name="color-scheme"]')
        if (meta.content === 'dark') {
          meta.content = 'light'
          document.body.classList.remove('dark-mode')
          document.body.classList.add('light-mode')
        } else {
          meta.content = 'dark'
          document.body.classList.remove('light-mode')
          document.body.classList.add('dark-mode')
        }
      }}
    />
  )
}
