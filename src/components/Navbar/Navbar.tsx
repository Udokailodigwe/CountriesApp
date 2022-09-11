import React from 'react'
import { Link } from 'react-router-dom'

import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'

import { ThemeContext } from '../../App'

import FavoriteIcon from '@mui/icons-material/Favorite'
import CircleIcon from '@mui/icons-material/Circle'
import { Box, Tooltip } from '@mui/material'
import { blueGrey, grey, purple } from '@mui/material/colors'

import useStyles from './Style'

export default function Navbar() {
  const classes = useStyles()
  const { setTheme } = React.useContext(ThemeContext)
  const { favorites } = useSelector((state: RootState) => state)

  const AppThemes = [
    {
      id: 1,
      action: () => setTheme('dark'),
      title: 'Switch Theme',
      cursor: 'pointer',
      color: blueGrey[900],
    },
    {
      id: 2,
      action: () => setTheme('light'),
      title: 'Switch Theme',
      cursor: 'pointer',
      color: grey[50],
    },
    {
      id: 3,
      action: () => setTheme('purple'),
      title: 'Switch Theme',
      cursor: 'pointer',
      color: purple[900],
    },
  ]

  return (
    <Box className={classes.appbar}>
      <Link to="/" className={classes.link}>
        COUNTRY APP
      </Link>
      <Box className={classes.box}>
        <Link to="/favorite" className={classes.link}>
          <Tooltip title="Favorite country list">
            <FavoriteIcon />
          </Tooltip>
          <sup className={classes.sup}>{favorites.favoriteList.length}</sup>
        </Link>

        <Box>
          {AppThemes.map((AppTheme) => (
            <Box key={AppTheme.id}>
              <Box onClick={AppTheme.action}>
                <Tooltip title={AppTheme.title}>
                  <CircleIcon
                    style={{
                      color: AppTheme.color,
                      cursor: AppTheme.cursor,
                    }}
                    fontSize="small"
                  />
                </Tooltip>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
