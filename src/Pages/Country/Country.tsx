import React from 'react'
import { useParams, Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

import { AppState } from '../../types'

import { Typography, Box } from '@mui/material'

import useStyles from './Style'

export default function Country() {
  const classes = useStyles()
  const { name } = useParams<{ name: string }>()
  const country = useSelector((state: AppState) =>
    state.countries.countryData.find((country) => country.name.common === name)
  )

  if (!country) {
    return (
      <Box>
        <Link className={classes.link} to={'/'}>
          <button className={classes.return_button}>Home</button>
        </Link>
        <Box className={classes.not_found}>
          <Typography>404</Typography>
          <Typography>Country not found</Typography>
        </Box>
      </Box>
    )
  }

  return (
    <Box>
      <Typography align="center">Country Details</Typography>
      <Link className={classes.link} to={'/'}>
        <button className={classes.return_button}>Home</button>
      </Link>
      <Box className={classes.box}>
        <Typography>{country.name.common}</Typography>
        <Box>
          <img src={country.flags.png} alt="flag" />
        </Box>
      </Box>
    </Box>
  )
}
