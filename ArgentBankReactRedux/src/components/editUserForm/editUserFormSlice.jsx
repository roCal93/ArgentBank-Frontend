import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Create an asynchronous thunk action for updating the user's name
export const userName = createAsyncThunk('data/putData', async (newData) => {
  // Make a PUT request to update the user profile
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

// Create a slice of the Redux store for managing the user edit form state
const editUserFormSlice = createSlice({
  name: 'newUserName',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},

  // Handle asynchronous actions with extra reducers
  extraReducers: (builder) => {
    builder
      .addCase(userName.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(userName.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items.push(action.payload) // Add the updated username to the items array
      })
      .addCase(userName.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default editUserFormSlice.reducer
