import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { handleSort } from '../../redux/slices/countrySlice'
import {
  addFavorite,
  removeFavorite,
} from '../../redux/slices/favoriteListSlice'

import Header from './Header'

import { lightGreen } from '@mui/material/colors'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Box, Table, TableBody, TableCell, TableRow } from '@mui/material'

import useStyle from './BodyStyle'

const Body = () => {
  const classes = useStyle()

  const dispatch = useDispatch()
  const { countries, favorites } = useSelector((state: RootState) => state)
  const [sortAsc, setSortAsc] = useState(true)

  const sortHandler = <T,>(key: keyof T) => {
    dispatch(handleSort({ key, order: sortAsc ? 'asc' : 'desc' }))
    setSortAsc((prev) => !prev)
  }

  const TableHeaders = [
    {
      label: 'Favorite',
      action: () => null,
      isClickable: false,
    },
    {
      label: 'Flag',
      action: () => null,
      isClickable: false,
    },
    {
      label: 'Country',
      action: () => sortHandler('name'),
      isClickable: true,
    },
    {
      label: 'Capital',
      action: () => sortHandler('capital'),
      isClickable: true,
    },
    {
      label: 'Population',
      action: () => sortHandler('population'),
      isClickable: true,
    },
    {
      label: 'Languages',
      action: () => null,
      isClickable: false,
    },
    {
      label: 'Currencies',
      action: () => null,
      isClickable: false,
    },
  ]

  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <Header tableHeaders={TableHeaders} />
      <TableBody>
        {countries.countryData.map((country) => {
          const isAddedToFav = favorites.favoriteList.some(
            (fav) => fav.name === country.name
          )
          return (
            <TableRow key={country.name}>
              <TableCell>
                {isAddedToFav ? (
                  <Box onClick={() => dispatch(removeFavorite(country))}>
                    <FavoriteIcon sx={{ color: lightGreen[500] }} />
                  </Box>
                ) : (
                  <Box onClick={() => dispatch(addFavorite(country))}>
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
                <Link className={classes.link} to={`/country/${country.name}`}>
                  {country.name}
                </Link>
              </TableCell>
              <TableCell align="left">{country.capital}</TableCell>
              <TableCell>{country.population}</TableCell>
              <TableCell align="left">
                {Object.values(country.languages).join(', ')}
              </TableCell>
              <TableCell align="left">
                {Object.values(country.currencies).map((cur) => cur.name)}
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
export default Body
