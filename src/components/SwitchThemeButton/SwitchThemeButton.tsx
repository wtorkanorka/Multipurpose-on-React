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
        let theme = document.getElementById('theme')
        console.log(theme)

        if (theme!.getAttribute('href') == './src/dark-theme.css') {
          theme!.href = './src/light-theme.css'
        } else {
          theme!.href = './src/dark-theme.css'
        }
      }}
    />
  )
}
