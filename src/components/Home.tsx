import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Typography } from '@mui/material'

import { fetchCountries } from '../redux/slices/countrySlice'
import { AppDispatch, RootState } from '../redux/store'

export default function Home() {
  const dispatch = useDispatch<AppDispatch>()
  const { countries } = useSelector((state: RootState) => state)

  function fetchData() {
    dispatch(fetchCountries())
  }

  return (
    <div>
      <Typography variant="h1" align="center">
        Country Display
      </Typography>
      <Button variant="contained" onClick={fetchData}>
        fetch
      </Button>
      {countries.countryData.map((country) => (
        <>
          <li>{country.name.common}</li>
        </>
      ))}
    </div>
  )
}
