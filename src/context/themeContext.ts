import { createContext } from 'react'

type ThemeContextProps = {
  lightTheme: boolean
  themeStyle: {}
  toggleTheme: () => void
}
const ThemeContext = createContext<ThemeContextProps>(null!)
export default ThemeContext
