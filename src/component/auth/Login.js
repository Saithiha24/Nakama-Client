import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Toast, ToastContainer } from "react-bootstrap";

const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [show, setshow] = useState(false);
  const [loading, setloading] = useState(false);
  // Toast
  const [showC, setshowC] = useState(false);
  // Function
  const toggleShowC = () => setshowC(!showC);
  const submitHandler = async (e) => {
    e.preventDefault();
    setloading(true);
    if (!email || !password) {
      setloading(false);
      return;
    } else
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const url = "http://localhost:5000/api/auth/signin";
        const { data } = await axios.post(
          url,
          {
            email,
            password,
          },
          config
        );
        console.log(data);
        setloading(false);
      } catch (error) {
        setloading(error);
        console.log(error);
      }
  };
  return (
    <div className="mt-2">
      {/* ShowAlert for input value */}
      <ToastContainer className="p-3" position="top-center">
        <Toast
          show={showC}
          onClose={toggleShowC}
          className="bg-danger text-white"
          autohide="false"
          delay="3000"
        >
          <Toast.Header>
            <strong className="me-auto">Warning</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Please fill all the fields</Toast.Body>
        </Toast>
      </ToastContainer>

      <Form onSubmit={submitHandler}>
        {/* Email */}
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        {/* password */}

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <div className="d-flex">
            <Form.Control
              type={show ? "text" : "password"}
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
          type="submit"
          style={{ width: "100%" }}
          className={`my-3 ${loading ? "disabled" : "bg-primary"}`}
        >
          Log-in
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
    </div>
  );
};

export default Login;
