import { Skeleton, Stack } from "@mui/material";
import React from "react";

const ChatListSkeleton = () => {
  return (
    <Stack>
      <Skeleton animation="wave" style={{ width: "100%", height: "150px" }} />
      <Skeleton animation="wave" style={{ width: "100%", height: "150px" }} />
      <Skeleton animation="wave" style={{ width: "100%", height: "150px" }} />
      <Skeleton animation="wave" style={{ width: "100%", height: "150px" }} />
      <Skeleton animation="wave" style={{ width: "100%", height: "150px" }} />
      <Skeleton animation="wave" style={{ width: "100%", height: "150px" }} />
    </Stack>
  );
};

export default ChatListSkeleton;
