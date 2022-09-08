import React from 'react'
import Routes from './Routes'

import Navbar from '../src/components/Navbar/Navbar'
import { darkTheme } from './themes/dark'
import { lightTheme } from './themes/light'
import { purpleTheme } from './themes/purple'

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

import './App.css'

export type Mode = 'dark' | 'light' | 'orange'
export const ThemeContext = React.createContext({
  mode: 'dark',
  setTheme: (mode: Mode) => console.log(mode),
})

export default function App() {
  const [mode, setMode] = React.useState<Mode>('dark')

  const handleSwitchThemes = (mode: Mode) => {
    switch (mode) {
    case 'light':
      return lightTheme
    case 'dark':
      return darkTheme
    case 'orange':
      return purpleTheme

    default:
      return darkTheme
    }
  }

  const handleSwitchTheme = (mode: Mode) => {
    setMode(mode)
  }

  const theme = React.useMemo(
    () => createTheme(handleSwitchThemes(mode)),
    [mode]
  )

  return (
    <>
      <ThemeContext.Provider value={{ mode, setTheme: handleSwitchTheme }}>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          <Navbar />
          <Routes />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}
