import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { login } from '../../features/authSlice'
import { logout } from '../../features/authSlice'

export const loginUser = createAsyncThunk(
  'data/postData',
  async (newData, { dispatch }) => {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })

    if (!response.ok) {
      throw new Error("Erreur lors de l'envoi des données")
    }

    const data = await response.json()
    localStorage.setItem('token', data.body.token)
    dispatch(login({ token: data.body.token }))
  }
)

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token') // Supprime le token du stockage
  dispatch(logout()) // Appelle l'action logout
}

const signInFormSlice = createSlice({
  name: 'login',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items.push(action.payload)
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default signInFormSlice.reducer
