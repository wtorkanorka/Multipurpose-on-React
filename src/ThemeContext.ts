import React, { useState } from 'react'
import { createContext } from 'react'
const initial = {
  windowsThemeIsDark: false,
  theme: '',
  toggle: () => {},
  searchForTagState: '',
  toggleTags: (e: string) => {},
  searchState: '',
  toggleSearch: (e: string) => {},
  stateInvertColor: 0,
  setStateInvertColor: (e: number) => {},
}
export const ThemeContext = createContext(initial)
