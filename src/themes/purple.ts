import { ThemeOptions } from '@mui/material'
import { purple } from '@mui/material/colors'

export const purpleTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    background: { paper: purple[100], default: purple[100] },
    primary: {
      main: purple['A400'],
    },
  },
}
