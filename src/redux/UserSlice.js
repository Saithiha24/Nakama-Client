import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
    userList: [],
  },
  reducers: {
    getUser: (state, { payload }) => {
      state.userInfo = payload;
    },
    chatUsersList: (state, { payload }) => {
      state.userList = payload;
    },
  },
});
export const { getUser, chatUsersList } = UserSlice.actions;
export default UserSlice.reducer;
export const User = (state) => state.userInfo;
export const UserList = (state) => state.userList;
