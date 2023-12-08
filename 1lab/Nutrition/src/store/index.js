import { configureStore } from '@reduxjs/toolkit'
import UserReducer from "../features/user/user.slice";
import NutritionReducer from "../features/nutrition/nutrition.slice"
import MealReducer from "../features/meal/meal.slice"

export default configureStore({
  reducer: {
    user: UserReducer,
    nutrition: NutritionReducer,
    meals: MealReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  })
})
