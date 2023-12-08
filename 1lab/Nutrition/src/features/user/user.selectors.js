import { createSelector } from "@reduxjs/toolkit";

const self = state => state.user;

export const isAuthenticated = createSelector(
  self,
  ({ isAuthenticated }) => isAuthenticated
)

export const selectUser = createSelector(
  self,
  ({ user }) => user
)
