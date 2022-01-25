import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
    userList: [],
    myChat: [],
  },
  reducers: {
    getUser: (state, { payload }) => {
      state.userInfo = payload;
    },
    chatUsersList: (state, { payload }) => {
      state.userList = payload;
    },
    myChat: (state, { payload }) => {
      state.myChat = payload;
    },
  },
});
export const { getUser, chatUsersList, myChat } = UserSlice.actions;
export default UserSlice.reducer;
export const User = (state) => state.userInfo;
export const UserList = (state) => state.userList;
export const Chat = (state) => state.myChat;
