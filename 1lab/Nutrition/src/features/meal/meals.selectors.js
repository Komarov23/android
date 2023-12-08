import { createSelector } from "@reduxjs/toolkit";

const self = state => state.meals;

export const selectMeals = createSelector(
  self,
  ({ meals }) => meals
)
