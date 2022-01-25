import {
  AppBar,
  IconButton,
  SwipeableDrawer,
  Toolbar,
  Tooltip,
  Typography,
  Box,
  Input,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import MenuProfile from "./MenuProfile";
import { Toast, ToastContainer } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { chatUsersList, User } from "../redux/UserSlice";
import axios from "axios";
import ChatLoading from "./ChatLoading";
import SearchList from "./SearchList";

const NavBar = () => {
  const userInfo = useSelector(User);
  const dispatch = useDispatch();
  const token = userInfo.token;
  const [drawer, setDrawer] = useState(false);
  const [search, setsearch] = useState("");
  const [loading, setloading] = useState(false);
  // Toast
  const [toastBg, settoastBg] = useState();
  const [toastBody, settoastBody] = useState();
  const [showToast, setshowToast] = useState(false);

  const toggleToast = () => setshowToast(!showToast);
  const alertToast = (toastbg, toastBody) => {
    settoastBg(toastbg);
    settoastBody(toastBody);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!search) {
      toggleToast();
      alertToast("danger", "please fill the field");
      return;
    }
    try {
      if (token) {
        setloading(true);
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await axios.get(
          `http://localhost:5000/api/auth/users?search=${search}`,
          config
        );
        dispatch(chatUsersList(data));
        setloading(false);
        return;
      }
    } catch (error) {
      setloading(false);
      console.log(error);
      toggleToast();
      alertToast("danger", "Something went wrong please try again");
    }
  };

  const drawerOpen = () => setDrawer(true);
  const drawerClose = () => {
    setDrawer(false);
  };

  return (
    <div>
      <AppBar position="relative">
        <Toolbar className="d-flex justify-content-between">
          <Tooltip title="Find a user" onClick={drawerOpen}>
            <IconButton>
              <Search />
            </IconButton>
          </Tooltip>
          <Typography variant="h6">NAKAMA</Typography>
          <MenuProfile />
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <SwipeableDrawer
        anchor="left"
        open={drawer}
        onOpen={drawerOpen}
        onClose={drawerClose}
        variant="temporary"
        style={{ width: "300px" }}
      >
        <Box className="bg-white" style={{ width: "100%" }}>
          <form onSubmit={submitHandler} className="d-flex">
            <Input
              autoComplete="true"
              className="py-2 ps-2"
              placeholder="search  a user"
              onChange={(e) => setsearch(e.target.value)}
            />
            <IconButton type="submit">
              <Search />
            </IconButton>
          </form>
          {loading ? (
            <ChatLoading />
          ) : (
            <SearchList
              token={token}
              toggleToast={toggleToast}
              alertToast={alertToast}
            />
          )}
        </Box>
        {/* Toast */}
        <ToastContainer className="p-3" position="top-center">
          <Toast
            show={showToast}
            onClose={toggleToast}
            className={`bg-${toastBg} text-white`}
            autohide="false"
            delay="2000"
          >
            <Toast.Header>
              <strong className="me-auto">Warning</strong>
              <small>1s ago</small>
            </Toast.Header>
            <Toast.Body>{toastBody}</Toast.Body>
          </Toast>
        </ToastContainer>
      </SwipeableDrawer>
    </div>
  );
};

export default NavBar;
