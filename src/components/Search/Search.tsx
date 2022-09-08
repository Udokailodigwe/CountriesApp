import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { handleSearch } from '../../redux/slices/countrySlice'
//@ts-ignore
import debounce from 'lodash.debounce'

import { Box } from '@mui/material'

import useStyles from './Style'

function Search() {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    console.log('target:', target.value)
    dispatch(handleSearch(target.value))
  }

  const debouncedChangeHandler = useCallback(debounce(handleChange, 400), [])

  return (
    <Box>
      <input
        className={classes.input}
        placeholder="search country"
        onChange={debouncedChangeHandler}
      />
    </Box>
  )
}

export default Search
