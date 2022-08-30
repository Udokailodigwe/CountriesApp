import { createContext } from 'react'

type ThemeContextProps = {
  darkTheme: boolean
  themeStyle: {}
  toggleTheme: () => void
}
const ThemeContext = createContext<ThemeContextProps>(null!)
export default ThemeContext
