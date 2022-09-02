import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'

import { fetchCountries } from '../redux/slices/countrySlice'
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'

export default function Home() {
  const dispatch = useDispatch<AppDispatch>()
  const { countries } = useSelector((state: RootState) => state)

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  return (
    <div>
      <Typography variant="h3" align="center">
        Country Display
      </Typography>
      {countries.isLoading && (
        <Typography>Wait for countries list...</Typography>
      )}
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ minWidth: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Flag</TableCell>
                <TableCell align="left">Country</TableCell>
                <TableCell align="center">Capital</TableCell>
                <TableCell align="right">Population</TableCell>
                <TableCell align="right">Languages</TableCell>
                <TableCell align="right">Currency</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {countries.countryData.map((country) => {
                console.log(country)
                return (
                  <TableRow key={country.name.common}>
                    <TableCell component="th" scope="row">
                      <img
                        src={country.flags.png}
                        alt="flag"
                        style={{ height: 20, width: 30 }}
                      />
                    </TableCell>
                    <TableCell align="left">{country.name.common}</TableCell>
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
      </Paper>
    </div>
  )
}
