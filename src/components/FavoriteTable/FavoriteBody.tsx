import React from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { removeFavorite } from '../../redux/slices/favoriteListSlice'

import Header from './FavoriteHeader'

import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { TableBody, TableCell, Table, TableRow } from '@mui/material'

import useStyles from './FavoriteBodyStyle'

export default function FavoriteBody() {
  const classes = useStyles()

  const dispatch = useDispatch()
  const { favorites } = useSelector((state: RootState) => state)

  const TableHeaders = [
    {
      label: 'flag',
    },
    {
      label: 'country',
    },
    {
      label: 'capital',
    },
  ]

  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <Header headers={TableHeaders} />
      <TableBody>
        {favorites.favoriteList.map((favorite) => {
          return (
            <TableRow key={favorite.name}>
              <TableCell component="th" scope="row">
                <img
                  src={favorite.flags.png}
                  alt="flag"
                  style={{ height: 50, width: 70 }}
                />
              </TableCell>
              <TableCell align="left">
                <Link className={classes.link} to={`/country/${favorite.name}`}>
                  {favorite.name}
                </Link>
              </TableCell>
              <TableCell align="left">{favorite.capital}</TableCell>
              <TableCell align="right">
                <IconButton
                  aria-label="delete"
                  size="small"
                  onClick={() => dispatch(removeFavorite(favorite))}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
