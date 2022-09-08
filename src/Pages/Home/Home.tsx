import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { fetchCountries, handleSort } from '../../redux/slices/countrySlice'

import {
  addFavorite,
  removeFavorite,
} from '../../redux/slices/favoriteListSlice'

import { Country } from '../../types'

import { lightGreen } from '@mui/material/colors'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
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

export default function Home() {
  const classes = useStyles()

  const dispatch = useDispatch<AppDispatch>()
  const { countries, favorites } = useSelector((state: RootState) => state)

  const [sortBy, setSortBy] = useState({ name: 'asc' })

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  function handleAddFavorite(country: Country) {
    dispatch(addFavorite(country))
  }

  function handleDeleteFavorite(country: Country) {
    dispatch(removeFavorite(country))
  }

  const sortNameHandler = () => {
    if (sortBy.name === 'asc') {
      dispatch(handleSort({ key: 'name', order: 'asc' }))
      setSortBy((prevState) => ({
        ...prevState,
        name: 'desc',
      }))
    } else {
      dispatch(handleSort({ key: 'name', order: 'desc' }))
      setSortBy((prevState) => ({
        ...prevState,
        name: 'asc',
      }))
    }
  }

  return (
    <div className={classes.main}>
      {countries.isLoading ? (
        <Typography>Wait for countries list...</Typography>
      ) : countries.error ? (
        <Typography>Something went wrong! Try again...</Typography>
      ) : (
        <TableContainer sx={{ minWidth: 440 }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Favorite</TableCell>
                <TableCell>Flag</TableCell>
                <TableCell
                  sx={{
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  align="left"
                  onClick={sortNameHandler}
                >
                  <ArrowDropUpIcon />
                  Country
                  <ArrowDropDownIcon />
                </TableCell>
                <TableCell align="center">Capital</TableCell>
                <TableCell align="right">Population</TableCell>
                <TableCell align="right">Languages</TableCell>
                <TableCell align="right">Currency</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {countries.countryData.map((country) => {
                const isAddedToFav = favorites.favoriteList.some(
                  (fav) => fav.name.common === country.name.common
                )
                return (
                  <TableRow
                    key={country.name.common}
                    sx={{
                      hover: { backgroundColor: 'brown' },
                    }}
                  >
                    <TableCell>
                      {isAddedToFav ? (
                        <Box onClick={() => handleDeleteFavorite(country)}>
                          <FavoriteIcon sx={{ color: lightGreen[500] }} />
                        </Box>
                      ) : (
                        <Box onClick={() => handleAddFavorite(country)}>
                          <FavoriteBorderIcon sx={{ color: lightGreen[500] }} />
                        </Box>
                      )}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <img
                        src={country.flags.png}
                        alt="flag"
                        style={{ height: 20, width: 30 }}
                      />
                    </TableCell>
                    <TableCell align="left">
                      <Link
                        className={classes.link}
                        to={`/country/${country.name.common}`}
                      >
                        {country.name.common}
                      </Link>
                    </TableCell>
                    <TableCell align="center">{country.capital}</TableCell>
                    <TableCell align="right">{country.population}</TableCell>
                    <TableCell align="right">
                      {Object.values(country.languages).join(', ')}
                    </TableCell>
                    <TableCell align="right">
                      {Object.values(country.currencies).map((cur) => cur.name)}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  )
}
