import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import ThemeContext from '../../context/themeContext'

import FavoriteIcon from '@mui/icons-material/Favorite'
import { Box, Button, Tooltip } from '@mui/material'

import useStyles from './Style'

export default function Navbar() {
  const classes = useStyles()
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <div className={classes.appbar}>
      <Link to="/" className={classes.link}>
        COUNTRY APP
      </Link>
      <Box>
        <Link to="/favorite" className={classes.link}>
          <Tooltip title="Favorite country list">
            <FavoriteIcon />
          </Tooltip>
        </Link>
        <Button onClick={toggleTheme}>toggle</Button>
      </Box>
    </div>
  )
}
