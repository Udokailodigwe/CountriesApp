import { createSlice } from '@reduxjs/toolkit'
// createAsyncThunk

export interface countryType {
  name: string
  sex: string
}

const initialState: countryType = {
  name: 'Udoka',
  sex: 'male',
}

// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount: number) => {
//     const response = await fetchCount(amount)
//     // The value we return becomes the `fulfilled` action payload
//     return response.data
//   }
// )

export const counterSlice = createSlice({
  name: 'counters',
  initialState,

  reducers: {
    firstName: (state) => {
      console.log('triggered reducer firstname', state.name)
    },
    gender: (state) => {
      console.log('triggered reducer gender', state.sex)
    },
  },
})

export const { firstName, gender } = counterSlice.actions
export default counterSlice.reducer
