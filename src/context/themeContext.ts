import { createContext } from 'react'

type ThemeContextProps = {
  countries: string
  toggleCountries: () => void
}
const ThemeContext = createContext<ThemeContextProps>(null!)
export default ThemeContext
