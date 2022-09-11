import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

import { fetchCountriesThunk } from '../../redux/slices/countrySlice'
import { AppState } from '../../types'

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Box,
  Typography,
} from '@mui/material/'

import useStyles from './Style'

export default function Country() {
  const classes = useStyles()

  const dispatch = useDispatch()

  const { name } = useParams<{ name: string }>()
  const country = useSelector((state: AppState) =>
    state.countries.countryData.find((country) => country.name === name)
  )

  useEffect(() => {
    dispatch(fetchCountriesThunk())
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
    <Card sx={{ Width: 345 }} className={classes.card}>
      <CardMedia
        component="img"
        height="250"
        image={country.flags.png}
        alt="flag"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {country.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Capital: {country.capital}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Languages: {Object.values(country.languages).join(', ')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Currency: {Object.values(country.currencies).map((cur) => cur.name)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Population:{country.population}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={'/'} className={classes.link}>
          <Button
            size="small"
            sx={{
              backgroundColor: '#bada55',
              color: '#000',
            }}
          >
            Back
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}
