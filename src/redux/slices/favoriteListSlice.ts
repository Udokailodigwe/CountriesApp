import { createSlice } from '@reduxjs/toolkit'
import { Country } from '../../types'

export interface FavoriteState {
  favoriteList: Country[]
}

const favorite = localStorage.getItem('favoriteItem')
  ? JSON.parse(localStorage.getItem('favoriteItem') || '{}')
  : []

const initialState: FavoriteState = {
  favoriteList: favorite,
}

const favoriteListSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const isDuplicate = state.favoriteList.some(
        (fav) => fav.name === action.payload.name
      )
      if (!isDuplicate) {
        const favCountry = action.payload
        state.favoriteList = [...state.favoriteList, favCountry]
      }
      localStorage.setItem('favoriteItem', JSON.stringify(state.favoriteList))
    },

    removeFavorite: (state, action) => {
      const newFavoriteList = state.favoriteList.filter(
        (fav) => fav.name !== action.payload.name
      )
      state.favoriteList = newFavoriteList
      localStorage.setItem('favoriteItem', JSON.stringify(state.favoriteList))
    },

    clearFavorite: (state) => {
      state.favoriteList = []
      localStorage.setItem('favoriteItem', JSON.stringify(state.favoriteList))
    },
  },
})

export const { addFavorite, removeFavorite, clearFavorite } =
  favoriteListSlice.actions
export default favoriteListSlice.reducer
