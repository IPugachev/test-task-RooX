import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'

import uiSlice from './reducers/ui/uiSlice'
import { userAPI } from './services/userService'

const rootReducer = combineReducers({
  [userAPI.reducerPath]: userAPI.reducer,
  ui: uiSlice,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAPI.middleware),
  devTools: true,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
