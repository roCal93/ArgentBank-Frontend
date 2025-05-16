import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { login } from '../../features/authSlice' // Importing the login action from the auth slice
import { logout } from '../../features/authSlice' // Importing the logout action from the auth slice

// Creating an asynchronous action for user login
export const loginUser = createAsyncThunk(
  'data/postData', // Action type
  async (newData, { dispatch }) => {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })

    if (!response.ok) {
      throw new Error('Error while sending data')
    }

    const data = await response.json()
    localStorage.setItem('token', data.body.token)
    dispatch(login({ token: data.body.token })) // Dispatch the login action with the token
  }
)

// Action to log out the user
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token')
  dispatch(logout()) // Dispatch the logout action
}

// Create a slice to manage the login state
const signInFormSlice = createSlice({
  name: 'login',
  initialState: {
    token: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Manage the different states of the asynchronous action loginUser
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.token = action.payload
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default signInFormSlice.reducer
