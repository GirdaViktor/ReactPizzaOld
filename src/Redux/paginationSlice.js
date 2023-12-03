import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.pageCount = action.payload;
    },
  }
});

export const { setCurrentPage } = paginationSlice.actions;
export default paginationSlice.reducer;
