import React, { useEffect } from "react";
import { Box } from "@mui/material";
import ChatList from "../../ChatRoom/ChatList";
import GroupChat from "../../ChatRoom/GroupChat";
import NavBar from "../../ChatRoom/NavBar";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/UserSlice";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const restoreData = () => {
      const user = JSON.parse(localStorage.getItem("userInfo"));
      if (user) dispatch(getUser(user));
      if (!user) navigate("/");
    };
    restoreData();
  }, [dispatch, navigate]);
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
