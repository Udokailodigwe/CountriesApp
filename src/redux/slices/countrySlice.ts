import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Country, Sort, countriesState } from '../../types'

export const fetchCountries = createAsyncThunk('country/fetchAll', async () => {
  const URL =
    'https://restcountries.com/v3.1/all?fields=name,languages,currencies,population,flags,capital'
  const response = await axios.get(URL)

  return response
})

const initialState: countriesState = {
  countryData: [],
  countryDataRef: [],
  isLoading: true,
  error: !true,
}

function sort<T extends keyof Country>({ a, b, key, sortBy }: Sort<T>) {
  if (key === 'name') {
    if (sortBy === 'asc') {
      if (a.name.common < b.name.common) return -1
      if (a.name.common > b.name.common) return 1
    }
    if (a.name.common > b.name.common) return -1
    if (a.name.common < b.name.common) return 1
  }
  if (a[key] < b[key]) return -1
  if (a[key] > b[key]) return 1
  return 0
}

export const countrySlice = createSlice({
  name: 'countries',
  initialState,

  reducers: {
    handleSort: (state, action) => {
      const { key, order } = action.payload
      const sortedItems = state.countryData.sort((a, b) => {
        return sort({ a, b, key: key, sortBy: order })
      })
      console.log('sortBy:', sortedItems)
      state.countryData = sortedItems
    },

    handleSearch: (state, action) => {
      const searchBy = action.payload.toLowerCase()

      const searchCountries = state.countryDataRef.filter((item) => {
        const name = item.name.common.toLowerCase()
        if (name.startsWith(searchBy)) {
          return item
        }
        return false
      })
      state.countryData = searchCountries
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchCountries.rejected, (state) => {
      state.isLoading = false
      state.error = true
    })
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      const response = action.payload.data
      state.countryData = response
      state.countryDataRef = response
      state.isLoading = false
      state.error = !true
    })
  },
})

export const { handleSearch, handleSort } = countrySlice.actions
export default countrySlice.reducer
