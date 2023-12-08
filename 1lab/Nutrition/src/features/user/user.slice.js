import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isAuthenticated: false
  },
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
      state.isAuthenticated = true;
    },
    logout: (state, _) => {
      state.user = null;
      state.isAuthenticated = false;
    }
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer
