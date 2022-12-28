import React, { useState } from 'react'
import { createContext } from 'react'
const Comp = {
  theme: '',
  toggle: () => {},
}
export const ThemeContext = createContext(Comp)
