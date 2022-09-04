import React from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import {
  removeFavorite,
  clearFavorite,
} from '../../redux/slices/favoriteListSlice'

import { CountryType } from '../../types'

import ClearIcon from '@mui/icons-material/Clear'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

import useStyles from './Style'

export default function Favorite() {
  const classes = useStyles()

  const dispatch = useDispatch()
  const { favorites } = useSelector((state: RootState) => state)

  const handleDeleteFavorite = (favorite: CountryType) => {
    dispatch(removeFavorite(favorite))
  }
  const handleDeleteAllFavorite = () => {
    dispatch(clearFavorite())
  }

  return (
    <>
      <Box>
        <Typography variant="h3" align="center">
          FAVORITE COUNTRIES
        </Typography>
        {favorites.favoriteList.length === 0 ? (
          <Box>
            <Typography align="center">Favorite List is empty.</Typography>
            <Link to="/" className={classes.link}>
              Return home
            </Link>
          </Box>
        ) : (
          <>
            <Box
              className={classes.box}
              onClick={() => handleDeleteAllFavorite()}
            >
              <DeleteForeverIcon />
              <span>Clear all</span>
            </Box>
            <TableContainer sx={{ minWidth: 440 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Flag</TableCell>
                    <TableCell align="right">Country</TableCell>
                    <TableCell align="right">Capital</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {favorites.favoriteList.map((favorite) => {
                    return (
                      <TableRow key={favorite.name.common}>
                        <TableCell component="th" scope="row">
                          <img
                            src={favorite.flags.png}
                            alt="flag"
                            style={{ height: 50, width: 70 }}
                          />
                        </TableCell>
                        <TableCell align="right">
                          {favorite.name.common}
                        </TableCell>
                        <TableCell align="right">{favorite.capital}</TableCell>
                        <TableCell align="right">
                          <Box onClick={() => handleDeleteFavorite(favorite)}>
                            <ClearIcon />
                          </Box>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </Box>
    </>
  )
}
