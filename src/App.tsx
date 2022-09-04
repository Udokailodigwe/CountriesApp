import React, { useContext } from 'react'
import Routes from './Routes'

import ThemeContext from './context/themeContext'

import Navbar from '../src/components/Navbar/Navbar'

import './App.css'

export default function App() {
  const { themeStyle } = useContext(ThemeContext)

  return (
    <div style={themeStyle} className="App">
      <Navbar />
      <Routes />
    </div>
  )
}
