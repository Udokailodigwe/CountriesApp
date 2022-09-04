import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import countries from './slices/countrySlice'
import favorites from './slices/favoriteListSlice'

export const store = configureStore({
  reducer: {
    countries,
    favorites,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
