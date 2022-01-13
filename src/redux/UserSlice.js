import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
  },
  reducers: {
    getReducer: (state, { payload }) => (state.user = payload),
  },
});

export const User = (state) => state.user.user;
