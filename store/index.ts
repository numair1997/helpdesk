// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'





export const store = configureStore({
  reducer: {

  },
  middleware: (getDefaultMiddleware: () => any) =>
    getDefaultMiddleware()
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type RootStateModal = RootState["modal"];