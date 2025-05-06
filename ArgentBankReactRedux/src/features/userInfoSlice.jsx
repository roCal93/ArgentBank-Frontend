import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// thunk pour récupérer l'utilisateur
export const getUser = createAsyncThunk('user/getUser', async () => {
  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
  if (!response.ok) {
    throw new Error(
      "Une erreur s'est produite lors de la récupération des informations utilisateur."
    )
  }
  const user = await response.json()
  console.log(user)
  return user
})

// État initial
const initialState = {
  user: null,
  loading: false,
  error: null,
}

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true
        state.error = null // Réinitialiser l'erreur
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload // Mettre à jour les informations de l'utilisateur
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message // Enregistrer l'erreur
      })
  },
})

export default userInfoSlice.reducer
