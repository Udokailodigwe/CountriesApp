import React, { useContext } from 'react'
import Routes from './Routes'
import ThemeContext from './context/themeContext'

import Button from '@mui/material/Button'

export default function App() {
  const { themeStyle, toggleTheme } = useContext(ThemeContext)

  return (
    <div style={themeStyle} className="App">
      <Button onClick={toggleTheme}>toggle</Button>
      <Routes />
    </div>
  )
}
