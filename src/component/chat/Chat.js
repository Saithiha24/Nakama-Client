import React from "react";
import { Box } from "@mui/material";
import ChatList from "../../ChatRoom/ChatList";
import GroupChat from "../../ChatRoom/GroupChat";
import NavBar from "../../ChatRoom/NavBar";

const Chat = () => {
  return (
    <div style={{ width: "100%" }}>
      <NavBar />
      <Box className="d-flex">
        <ChatList />
        <GroupChat />
      </Box>
    </div>
  );
};

export default Chat;
