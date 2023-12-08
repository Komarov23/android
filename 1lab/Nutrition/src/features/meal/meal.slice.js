import { createSlice } from '@reduxjs/toolkit'

export const mealSlice = createSlice({
  name: 'meals',
  initialState: {
    meals: []
  },
  reducers: {
    setMeals: (state, { payload }) => {
      state.meals = payload
    },
    addMeal: (state, { payload }) => {
      state.meals = [...state.meals, payload];
    }
  },
})

export const { setMeals, addMeal } = mealSlice.actions

export default mealSlice.reducer
