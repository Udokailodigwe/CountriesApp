import React from 'react'
import { Link } from 'react-router-dom'

import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'

import { ThemeContext } from '../../App'
import Search from '../Search/Search'

import FavoriteIcon from '@mui/icons-material/Favorite'
import CircleIcon from '@mui/icons-material/Circle'
import { Box, Tooltip } from '@mui/material'
import { blueGrey, grey, purple } from '@mui/material/colors'

import useStyles from './Style'

export default function Navbar() {
  const classes = useStyles()
  const { setTheme } = React.useContext(ThemeContext)
  const { favorites } = useSelector((state: RootState) => state)

  return (
    <Box className={classes.appbar}>
      <Link to="/" className={classes.link}>
        COUNTRY APP
      </Link>
      <Search />
      <Box className={classes.box}>
        <Link to="/favorite" className={classes.link}>
          <Tooltip title="Favorite country list">
            <FavoriteIcon />
          </Tooltip>
          <sup className={classes.sup}>{favorites.favoriteList.length}</sup>
        </Link>

        <Box>
          <Box onClick={() => setTheme('dark')}>
            <Tooltip title="Switch theme">
              <CircleIcon sx={{ color: blueGrey[900] }} fontSize="small" />
            </Tooltip>
          </Box>
          <Box onClick={() => setTheme('light')}>
            <Tooltip title="Switch theme">
              <CircleIcon sx={{ color: grey[50] }} fontSize="small" />
            </Tooltip>
          </Box>
          <Box onClick={() => setTheme('orange')}>
            <Tooltip title="Switch theme">
              <CircleIcon sx={{ color: purple[900] }} fontSize="small" />
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
