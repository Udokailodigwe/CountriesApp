import React from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { clearFavorite } from '../../redux/slices/favoriteListSlice'

import FavoriteHeader from '../../components/FavoriteTable/FavoriteHeader'
import FavoriteBody from '../../components/FavoriteTable/FavoriteBody'

import { Box, Typography } from '@mui/material'

import useStyles from './Style'

export default function Favorite() {
  const classes = useStyles()

  const dispatch = useDispatch()
  const { favorites } = useSelector((state: RootState) => state)

  const isEmpty = favorites.favoriteList.length === 0

  return (
    <Box className={classes.main}>
      <Typography className={classes.header} align="center">
        FAVORITE COUNTRIES
      </Typography>
      {isEmpty ? (
        <Box>
          <Typography align="center">Favorite List is empty.</Typography>
          <Link to="/" className={classes.link}>
            <button className={classes.home_button}>Back</button>
          </Link>
        </Box>
      ) : (
        <>
          <Link to="/" className={classes.link}>
            <button className={classes.home_button}>Back</button>
          </Link>
          <button
            className={classes.button}
            onClick={() => dispatch(clearFavorite())}
          >
            Clear all
          </button>
          <FavoriteHeader headers={[]} />
          <FavoriteBody />
        </>
      )}
    </Box>
  )
}
