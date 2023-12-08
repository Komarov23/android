import { createSlice } from '@reduxjs/toolkit'

export const nutritionSlice = createSlice({
  name: 'nutrition',
  initialState: {
    nutrition: null
  },
  reducers: {
    setNutrition: (state, { payload }) => {
      state.nutrition = payload
    }
  },
})

export const { setNutrition } = nutritionSlice.actions

export default nutritionSlice.reducer
