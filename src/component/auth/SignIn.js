import React, { useState } from "react";
import { Container, Form, Button, Nav } from "react-bootstrap";

const SignIn = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [pic, setpic] = useState();
  const [confirmedPassword, setconfirmedPassword] = useState();
  const [show, setshow] = useState(false);

  return (
    <Container className="mt-3">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            onChange={(e) => setname(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        {/* password */}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <div className="d-flex">
            <Form.Control
              type={show ? "text" : "password"}
              required
              onChange={(e) => setpassword(e.target.value)}
            />
            <Button
              size="sm"
              variant="secondary"
              onClick={() => setshow(!show)}
            >
              {show ? (
                <i className="fas fa-eye"></i>
              ) : (
                <i className="fas fa-eye-slash"></i>
              )}
            </Button>
          </div>
        </Form.Group>
        {/* Confirm password */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirmed Password</Form.Label>
          <div className="d-flex">
            <Form.Control
              type={show ? "text" : "password"}
              required
              onChange={(e) => setconfirmedPassword(e.target.value)}
            />
            <Button
              size="sm"
              variant="secondary"
              onClick={() => setshow(!show)}
            >
              {show ? (
                <i className="fas fa-eye"></i>
              ) : (
                <i className="fas fa-eye-slash"></i>
              )}
            </Button>
          </div>
        </Form.Group>
        {/* Profile Picture */}
        <Form.Group className="mb-3" controlId="formBasicPic" md={8}>
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={(e) => setpic(e.target.file[0])}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={{ width: "100%" }}
          className="my-3"
        >
          Sign-in
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
