import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { firstname : null, username : null, token : null},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
      state.value.firstname = action.payload.firstname;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;