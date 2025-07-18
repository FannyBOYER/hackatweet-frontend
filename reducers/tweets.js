import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {
    loadTweets: (state, action) => {
      state.value = action.payload ;
    },

    removeAllBookmark: (state) => {
        state.value = [];
    },
  },
});

export const { loadTweets , removeAllBookmark } = tweetsSlice.actions;
export default tweetsSlice.reducer;