import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { User } from "../redux/UserSlice";

const ChatList = () => {
  useEffect(() => {
    fetchChat();
  }, []);

  const user = useSelector(User);
  const token = user.token;
  const fetchChat = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = axios.get("http://localhost:5000/api/chat", config);
    console.log(data);
  };
  return (
    <div className="mt-3">
      <Box>Chat List</Box>
    </div>
  );
};

export default ChatList;
