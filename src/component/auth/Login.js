import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Toast, ToastContainer } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [show, setshow] = useState(false);
  const [loading, setloading] = useState(false);
  // Toast
  const [toastBg, settoastBg] = useState();
  const [toastBody, settoastBody] = useState();
  const [showToast, setshowToast] = useState(false);
  // Function
  const toggleToast = () => setshowToast(!showToast);
  const alertToast = (toastbg, toastBody) => {
    settoastBg(toastbg);
    settoastBody(toastBody);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setloading(true);
    if (!email || !password) {
      setloading(false);
      toggleToast();
      alertToast("danger", "Please fill all the fields");
      return;
    } else
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const url = "http://localhost:5000/api/auth/login";
        const { data } = await axios.post(
          url,
          {
            email,
            password,
          },
          config
        );
        localStorage.setItem("userInfo", JSON.stringify(data));
        setloading(false);
        toggleToast();
        alertToast("success", "login successfully");
        navigate("/chat");
        return;
      } catch (error) {
        setloading(false);
        console.log(error);
        toggleToast();
        alertToast("danger", "login failed");
      }
  };
  return (
    <div className="mt-2">
      {/* ShowAlert for input value */}
      {/* dynamic toast*/}
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
      <Form onSubmit={submitHandler}>
        {/* Email */}
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setemail(e.target.value)}
          />
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
          onClick={() => {
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
