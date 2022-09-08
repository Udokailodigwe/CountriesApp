import React from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import {
  removeFavorite,
  clearFavorite,
} from '../../redux/slices/favoriteListSlice'

import { Country } from '../../types'

import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
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

  const handleDeleteFavorite = (favorite: Country) => {
    dispatch(removeFavorite(favorite))
  }
  const handleDeleteAllFavorite = () => {
    dispatch(clearFavorite())
  }

  const isEmpty = favorites.favoriteList.length === 0

  return (
    <Box className={classes.main}>
      <Box>
        <Typography className={classes.header} align="center">
          FAVORITE COUNTRIES
        </Typography>
        {isEmpty ? (
          <Box>
            <Typography align="center">Favorite List is empty.</Typography>
            <Link to="/" className={classes.link}>
              Back
            </Link>
          </Box>
        ) : (
          <>
            <Link to="/" className={classes.link}>
              Back
            </Link>
            <button
              className={classes.button}
              onClick={() => handleDeleteAllFavorite()}
            >
              Clear all
            </button>
            <TableContainer sx={{ minWidth: 440 }}>
              <Table aria-label="simple table">
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
                          <Link
                            className={classes.link}
                            to={`/country/${favorite.name.common}`}
                          >
                            {favorite.name.common}
                          </Link>
                        </TableCell>
                        <TableCell align="right">{favorite.capital}</TableCell>
                        <TableCell align="right">
                          <IconButton
                            aria-label="delete"
                            size="small"
                            onClick={() => handleDeleteFavorite(favorite)}
                          >
                            <DeleteIcon />
                          </IconButton>
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
    </Box>
  )
}
