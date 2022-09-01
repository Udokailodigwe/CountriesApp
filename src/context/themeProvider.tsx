import React, { useState, useEffect } from 'react'
import ThemeContext from './themeContext'

export function ThemeProvider({ children }: any) {
  let themeState = localStorage.getItem('theme') === 'true'

  const [lightTheme, setLightTheme] = useState(themeState)

  useEffect(() => {
    localStorage.setItem('theme', `${lightTheme}`)
  }, [lightTheme])

  const toggleTheme = () => {
    setLightTheme((prev) => !prev)
  }

  const themeStyle = {
    backgroundColor: lightTheme ? '#fff' : '#000',
    color: lightTheme ? '#000' : '#fff',
    height: '100vh',
  }

  return (
    <ThemeContext.Provider value={{ lightTheme, toggleTheme, themeStyle }}>
      {children}
    </ThemeContext.Provider>
  )
}
