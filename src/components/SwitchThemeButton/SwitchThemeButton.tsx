import React, { useEffect, useState } from 'react'
import { memo } from 'react'
interface Component {
  styles?: string
}
interface FC {
  name: string
  content: string
}
type Test = FC
export const SwitchThemeButton = memo(({ styles }: Component) => {
  const [invert, setInvert] = useState(0)
  return (
    <img
      src="/src/assets/icons/light.svg"
      alt="light"
      className={styles}
      id="switchTheme"
      style={{ filter: `invert(${invert})` }}
      onClick={() => {
        const meta: Test | any = document.querySelector(
          'meta[name="color-scheme"]',
        )

        if (meta!.content === 'dark') {
          meta!.content = 'light'
          document.body.classList.remove('dark-mode')
          document.body.classList.add('light-mode')
          setInvert(0)
        } else {
          meta!.content = 'dark'
          document.body.classList.remove('light-mode')
          document.body.classList.add('dark-mode')
          setInvert(1)
        }
      }}
    />
  )
})
