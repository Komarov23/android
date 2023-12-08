import { createSelector } from "@reduxjs/toolkit";

const self = state => state.nutrition;

export const selectNutrition = createSelector(
  self,
  ({ nutrition }) => nutrition
)
