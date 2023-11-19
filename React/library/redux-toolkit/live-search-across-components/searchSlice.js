// src/features/searchSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchInput: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

export const { setSearchInput } = searchSlice.actions;
export const selectSearchInput = (state) => state.search.searchInput;

export default searchSlice.reducer;