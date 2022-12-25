import React, { useEffect, useState } from 'react'
import { useMemo } from 'react'
interface Component {
  styles: string
}
interface FC {
  name: string
  content: string
}
type Test = FC
export default function SwitchThemeButton({ styles }: Component) {
  return (
    <img
      src="/src/assets/icons/light.svg"
      alt="light"
      className={styles}
      id="switchTheme"
      onClick={() => {
        const meta: Test | any = document.querySelector(
          'meta[name="color-scheme"]',
        )

        if (meta!.content === 'dark') {
          meta!.content = 'light'
          document.body.classList.remove('dark-mode')
          document.body.classList.add('light-mode')
        } else {
          meta!.content = 'dark'
          document.body.classList.remove('light-mode')
          document.body.classList.add('dark-mode')
        }
      }}
    />
  )
}
