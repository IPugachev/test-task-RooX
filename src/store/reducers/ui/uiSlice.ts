import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  fiteredeBy: 'city' | 'company' | null
}

const initialState: IState = {
  fiteredeBy: null,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<'city' | 'company'>) => {
      state.fiteredeBy = action.payload
      return state
    },
  },
})

export const { setFilter } = uiSlice.actions
export default uiSlice.reducer
