import { configureStore } from '@reduxjs/toolkit'
import applyIgniteReducer from './features/applyIgnite/applyIgniteSlice'
import applyClubReducer from './features/applyClubSlice'

export const store = configureStore({
  reducer: {
    applyIgnite: applyIgniteReducer,
    applyClub: applyClubReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
