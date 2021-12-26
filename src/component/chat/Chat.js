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

  return (
    <Container fluid="md" className="pt-3">
      <h1 className="d-flex justify-content-center align-items-center bg-light">
        Nakama
      </h1>
      <Card className="my-3 p-5">
        <Card.Body>
          <Tab.Container defaultActiveKey="first" bg="light">
            <Row>
              <Col>
                <Nav variant="pills" className="d-flex">
                  <Col>
                    <Nav.Item>
                      <Nav.Link eventKey="first">Sign-In</Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Log-In</Nav.Link>
                    </Nav.Item>
                  </Col>
                </Nav>
              </Col>
            </Row>
            <Row>
              <Col>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <SignIn />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Login />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Chat;
