import { Box, Container, Modal } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { User } from "../redux/UserSlice";
import ChatListSkeleton from "./ChatListSkeleton";

const ChatList = () => {
  const [chatList, setChatList] = useState();
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
    const { data } = await axios.get("http://localhost:5000/api/chat", config);
    setChatList(data);
    console.log(data);
  };
  return (
    <div className="mt-3">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <h3>ChatList</h3>
          <p>Create Group Chat +</p>
        </div>
        <section>
          {chatList ? (
            <div>
              {chatList.map((user) => (
                <div></div>
              ))}
            </div>
          ) : (
            <ChatListSkeleton />
          )}
        </section>
      </Container>
    </div>
  );
};

export default ChatList;
