import { createSlice } from '@reduxjs/toolkit'
import { CountryType } from '../../types'

export interface FavoriteState {
  favoriteList: CountryType[]
  quantity: number
}

const setFavorite = localStorage.getItem('favoriteItem')
  ? JSON.parse(localStorage.getItem('favoriteItem') || '{}')
  : []

const initialState: FavoriteState = {
  favoriteList: setFavorite,
  quantity: 1,
}

const favoriteListSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      //find item index
      const favoriteIndex = state.favoriteList.findIndex(
        (fav) => fav.name.common === action.payload.name.common
      )
      //if found index increase quantity only
      const quantity = state.quantity
      if (favoriteIndex >= 0) {
        state.favoriteList[favoriteIndex].quantity += 1
      } else {
        //add new favorite
        const favoriteQuantity = { quantity, ...action.payload }
        state.favoriteList = [...state.favoriteList, favoriteQuantity]
      }
      localStorage.setItem('favoriteItem', JSON.stringify(state.favoriteList))
    },

    removeFavorite: (state, action) => {
      const newFavoriteList = state.favoriteList.filter(
        (fav) => fav.name.common !== action.payload.name.common
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
