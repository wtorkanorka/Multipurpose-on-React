import React, { useState } from 'react'
import { createContext } from 'react'
const Comp = {
  theme: '',
  toggle: () => {},
  searchForTagState: '',
  toggleTags: (e: string) => {},
  searchState: '',
  toggleSearch: (e: string) => {},
}
export const ThemeContext = createContext(Comp)
