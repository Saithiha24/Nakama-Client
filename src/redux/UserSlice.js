import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
  },
  reducers: {
    getUser: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
});
export const { getUser } = UserSlice.actions;
export default UserSlice.reducer;
export const User = (state) => state.userInfo;
