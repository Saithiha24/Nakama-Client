import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuItem,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { User } from "../redux/UserSlice";

const MenuProfile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [modalOpen, setmodalOpen] = useState(false);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  // user Selector
  const userInfo = useSelector(User);
  const userProfile = userInfo.user;

  const modalOpenHandler = () => {
    handleClose();
    setmodalOpen(true);
  };
  const modalCloseHandler = () => setmodalOpen(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutHandler = () => {
    handleClose();
    localStorage.removeItem("userInfo");
    navigate("/");
  };
  return (
    <>
      {/* I need to wrap with and operator in order to wait data so that if I refesh error will not occur */}
      {
        userProfile && (
          <div>
            <Button
              color="secondary"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar alt="Remy Sharp" src={userProfile.pic} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={modalOpenHandler}>Profile</MenuItem>
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </Menu>

            {/* Model */}
            <Modal
              className="d-flex justify-content-center align-items-center"
              open={modalOpen}
              onClose={modalCloseHandler}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="bg-white p-3">
                <Typography
                  id="modal-modal-title"
                  variant="h3"
                  component="h2"
                  className="d-flex justify-content-center align-items-center mb-2"
                >
                  {userProfile.name}
                </Typography>
                <div className="d-flex justify-content-center align-items-center mb-2">
                  <Avatar
                    alt="Remy Sharp"
                    src={userProfile.pic}
                    style={{ width: 100, height: 100 }}
                  />
                </div>

                <Typography variant="h5" id="modal-modal-description">
                  {userProfile.email}
                </Typography>
              </Box>
            </Modal>
          </div>
        )
        // end of UserProfile && operator
      }
    </>
  );
};

export default MenuProfile;
