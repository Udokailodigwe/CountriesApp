import React, { useState, useEffect } from 'react'
import ThemeContext from './themeContext'

export function ThemeProvider({ children }: any) {
  let themeState = localStorage.getItem('theme') === 'true'
  console.log(themeState)

  const [darkTheme, setDarkTheme] = useState(themeState)
  console.log(darkTheme)

  useEffect(() => {
    localStorage.setItem('theme', `${darkTheme}`)
  }, [darkTheme])

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev)
  }

  const themeStyle = {
    backgroundColor: darkTheme ? '#fff' : '#000',
    color: darkTheme ? '#000' : '#fff',
    height: '100vh',
  }

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme, themeStyle }}>
      {children}
    </ThemeContext.Provider>
  )
}
