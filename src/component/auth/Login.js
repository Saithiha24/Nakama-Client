import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [show, setshow] = useState(false);
  return (
    <Container className="mt-3">
      <Form>
        {/* Email */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
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

        <Button
          variant="primary"
          type="submit"
          style={{ width: "100%" }}
          className="my-3"
        >
          Login
        </Button>
        <Button
          variant="danger"
          type="submit"
          style={{ width: "100%" }}
          onSubmit={() => {
            setemail("guest@example.com");
            setpassword("12345678");
          }}
        >
          Guest Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
