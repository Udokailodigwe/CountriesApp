import React, { useState } from 'react'
import ThemeContext from './themeContext'

export function ThemeProvider({ children }: any) {
  const [countries, setCountries] = useState('finland')

  const name = 'sweden'
  function toggleCountries() {
    setCountries(name)
  }

  return (
    <ThemeContext.Provider value={{ countries, toggleCountries }}>
      {children}
    </ThemeContext.Provider>
  )
}
