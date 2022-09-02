import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCountries = createAsyncThunk('country/fetchAll', async () => {
  const URL =
    'https://restcountries.com/v3.1/all?fields=name,languages,currencies,population,flags,capital'
  const response = await axios.get(URL)

  return response
})

export interface CountryType {
  name: {
    common: string
  }
  capital: String[]
  languages: {
    [name: string]: string
  }
  currencies: {
    [name: string]: {
      name: string
    }
  }
  population: number
  flags: {
    png: string
  }
}

export interface SliceState {
  countryData: CountryType[]
  isLoading: boolean
}

const initialState: SliceState = {
  countryData: [],
  isLoading: true,
}

export const countrySlice = createSlice({
  name: 'countries',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      console.log('action:', action)
      state.countryData = action.payload.data
      state.isLoading = false
    })
  },
})

// export const {} = countrySlice.actions
export default countrySlice.reducer
