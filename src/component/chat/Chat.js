import React, { useEffect } from "react";
import ChatList from "../../ChatRoom/MyChat";
import GroupChat from "../../ChatRoom/GroupChat";
import NavBar from "../../ChatRoom/NavBar";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/UserSlice";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

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
    <section style={{ width: "100%", overflow: "hidden" }}>
      <NavBar />
      <Row>
        <Col xs={4}>
          <ChatList />
        </Col>
        <Col xs={8}>
          <GroupChat />
        </Col>
      </Row>
    </section>
  );
};

export default Chat;
