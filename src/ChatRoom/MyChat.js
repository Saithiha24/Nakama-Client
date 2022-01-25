import { Container } from "@mui/material";

import React, { useState } from "react";
import ChatListSkeleton from "./ChatListSkeleton";

const MyChat = () => {
  // const [chatList, setChatList] = useState();

  return (
    <div className="mt-3">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <h3>ChatList</h3>
          <p>Create Group Chat +</p>
        </div>
        <section>
          {/* {chatList ? (
            <div>
              {chatList.map((user) => (
                <div key={user._id}>Hello</div>
              ))}
            </div>
          ) : ( */}
          <ChatListSkeleton />
          {/* )} */}
        </section>
      </Container>
    </div>
  );
};

export default MyChat;
