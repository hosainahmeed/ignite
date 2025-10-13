import { configureStore } from '@reduxjs/toolkit'
import applyIgniteReducer from './features/applyIgnite/applyIgniteSlice'

export const store = configureStore({
  reducer: {
    applyIgnite: applyIgniteReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
