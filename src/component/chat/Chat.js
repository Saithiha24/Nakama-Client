import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Tab, Col, Nav, Row, Card, Text } from "react-bootstrap";
import SignIn from "../auth/SignIn";
import Login from "../auth/Login";
const Chat = () => {
  // state
  const [chats, setchats] = useState([]);
  // function
  const fetchData = async () => {
    const { data } = axios.get("http://localhost:5000/api/chat");
    setchats(data);
  };
  // useEffect
  useEffect(() => {
    fetchData();
  }, []);

  return <div>Chat</div>;
};

export default Chat;
