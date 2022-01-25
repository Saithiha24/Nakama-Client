import { Avatar, List, ListItem } from "@mui/material";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { myChat, UserList } from "../redux/UserSlice";

const SearchList = ({ token, alertToast, toggleToast }) => {
  const searchList = useSelector(UserList);
  const dispatch = useDispatch();
  const accessChat = async (userId) => {
    console.log("click");
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/chat",
        { userId },
        config
      );
      dispatch(myChat(data));
      toggleToast();
      alertToast("success", `You can chat with someone`);
    } catch (error) {
      console.log(error);
      toggleToast();
      alertToast("danger", `Chat not found`);
    }
  };

  // spin loading
  return (
    <List className="my-2 px-2">
      {searchList.map((user) => (
        <ListItem
          key={user._id}
          style={{
            background: "gainsboro",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          className="my-2"
          onClick={() => accessChat(user._id)}
        >
          <Avatar
            src={user.pic}
            className="d-flex jsutify-content-center align-items-center"
          />
          <div className="ms-2">
            <div className="p-0">
              <strong>{user.name}</strong>
            </div>
            <small>{user.email}</small>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default SearchList;
