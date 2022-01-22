import { Avatar, Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { UserList } from "../redux/UserSlice";

const SearchList = () => {
  const searchList = useSelector(UserList);
  console.log(searchList);
  return (
    <div>
      {searchList.map((user) => (
        <Box key={user._id} className="my-2 d-flex">
          <Avatar src={user.pic} />
          <div>
            <h4>{user.name}</h4>
            <small>{user.email}</small>
          </div>
        </Box>
      ))}
    </div>
  );
};

export default SearchList;
