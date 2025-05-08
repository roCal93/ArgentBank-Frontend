import { createSlice } from '@reduxjs/toolkit'

// Initial state for the authentication slice
const initialState = {
  token: localStorage.getItem('token') || null, // Get the token from local storage or set to null
  isAuthenticated: !!localStorage.getItem('token'), // Check if the user is authenticated based on the presence of a token
}

// Creating the auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Defining the reducers
    login: (state, action) => {
      // Reducer for logging in
      state.token = action.payload.token // Set the token in the state
      state.isAuthenticated = true // Mark the user as authenticated
    },
    logout: (state) => {
      // Reducer for logging out
      state.token = null // Clear the token from the state
      state.isAuthenticated = false // Mark the user as not authenticated
    },
  },
})

// Exporting the login and logout actions for use in components
export const { login, logout } = authSlice.actions

// Exporting the default reducer for the slice to be used in the store
export default authSlice.reducer
