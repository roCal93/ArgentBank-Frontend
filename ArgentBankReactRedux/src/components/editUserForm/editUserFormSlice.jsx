import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const userName = createAsyncThunk('data/putData', async (newData) => {
  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(newData),
  })
  if (!response.ok) {
    throw new Error("Erreur lors de l'envoi des données")
  }
  const data = await response.json()
  return data
})

const editUserFormSlice = createSlice({
  name: 'newUserName',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userName.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(userName.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items.push(action.payload)
      })
      .addCase(userName.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default editUserFormSlice.reducer
