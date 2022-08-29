import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ThemeContext from '../context/themeContext'
import Button from '@mui/material/Button'

import { firstName, gender } from '../redux/slices/countrySlice'

export default function Home() {
  const { countries, toggleCountries }: any = useContext(ThemeContext)

  console.log('context:', countries)
  console.log('context:', toggleCountries)

  const dispatch = useDispatch()
  const profiles: any = useSelector((state) => state)
  console.log('profile:', profiles)

  function handleCount() {
    dispatch(firstName())
  }

  function handleDeCount() {
    dispatch(gender())
  }

  return (
    <>
      <h1>Test page</h1>
      <Button onClick={handleCount}>name</Button>
      <Button onClick={handleDeCount}>gender</Button>

      <Button onClick={toggleCountries}>toggle</Button>
      <p>{countries}</p>
    </>
  )
}
