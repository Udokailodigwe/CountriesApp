import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { countriesState } from '../../types'
import fetchCountriesAPI from '../../API/Country'
import sort from '../../SortHandler/Handler'

export const fetchCountriesThunk = createAsyncThunk(
  'country/fetchAll',
  async () => {
    const { response } = await fetchCountriesAPI()

    return response
  }
)

const initialState: countriesState = {
  countryData: [],
  countryDataRef: [],
  isLoading: true,
  error: false,
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
      state.countryData = sortedItems
    },

    handleSearch: (state, action) => {
      const searchBy = action.payload.toLowerCase()

      const searchCountries = state.countryDataRef.filter((item) => {
        const name = item.name.toLowerCase()
        if (name.startsWith(searchBy)) {
          return item
        }
        return false
      })
      state.countryData = searchCountries
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCountriesThunk.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchCountriesThunk.rejected, (state) => {
      state.isLoading = false
      state.error = true
    })
    builder.addCase(fetchCountriesThunk.fulfilled, (state, action) => {
      const response = action.payload
      state.countryData = response
      state.countryDataRef = response
      state.isLoading = false
      state.error = false
    })
  },
})

export const { handleSearch, handleSort } = countrySlice.actions
export default countrySlice.reducer
