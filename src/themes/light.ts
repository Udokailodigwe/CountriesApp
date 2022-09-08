import { ThemeOptions } from '@mui/material'
import { grey } from '@mui/material/colors'

export const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    background: { paper: '#dee4e7', default: '#dee4e7' },
    primary: {
      main: grey[700],
    },
  },
}
