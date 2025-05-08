import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// Async thunk to fetch user information
export const getUser = createAsyncThunk('user/getUser', async () => {
  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`, // Adding the token from local storage for authorization
    },
  })
  if (!response.ok) {
    throw new Error(
      "Une erreur s'est produite lors de la récupération des informations utilisateur." // Throw an error if the request fails
    )
  }
  const user = await response.json()
  console.log(user)
  return user
})

// Initial state for user information
const initialState = {
  user: null, // User data will be stored here
  loading: false, // Loading state for the fetch operation
  error: null, // State for storing any errors that occur
}

// Creating the userInfo slice
const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload // Update user information with the fetched data
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default userInfoSlice.reducer
