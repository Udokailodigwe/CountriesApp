import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchCountries } from '../../redux/slices/countrySlice'
import { AppState } from '../../types'

import { Typography, Box } from '@mui/material'

import useStyles from './Style'

export default function Country() {
  const classes = useStyles()

  const dispatch = useDispatch()

  const { name } = useParams<{ name: string }>()
  const country = useSelector((state: AppState) =>
    state.countries.countryData.find((country) => country.name.common === name)
  )

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  if (!country) {
    return (
      <Box>
        <Box className={classes.not_found}>
          <Typography>404</Typography>
          <Typography>Country not found</Typography>
        </Box>
      </Box>
    )
  }

  return (
    <Box className={classes.box}>
      <Typography>{country.name.common}</Typography>
      <Box>
        <img src={country.flags.png} alt="flag" />
      </Box>
    </Box>
  )
}
