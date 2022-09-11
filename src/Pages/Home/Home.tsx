import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { fetchCountriesThunk } from '../../redux/slices/countrySlice'

import Search from '../../components/Search/Search'
import Header from '../../components/HomeTable/Header'
import Body from '../../components/HomeTable/Body'

import { Typography, Box } from '@mui/material'

import useStyles from './Style'

export default function Home() {
  const classes = useStyles()

  const dispatch = useDispatch<AppDispatch>()
  const { countries } = useSelector((state: RootState) => state)

  useEffect(() => {
    dispatch(fetchCountriesThunk())
  }, [dispatch])

  return (
    <Box className={classes.main}>
      {countries.isLoading ? (
        <Typography>Wait for countries list...</Typography>
      ) : countries.error ? (
        <Typography>Something went wrong! Try again...</Typography>
      ) : (
        <>
          <Search />
          <Header tableHeaders={[]} />
          <Body />
        </>
      )}
    </Box>
  )
}
