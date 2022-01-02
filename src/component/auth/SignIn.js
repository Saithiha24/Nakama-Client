import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Form,
  Button,
  Toast,
  ToastContainer,
} from "react-bootstrap";

const SignIn = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [pic, setpic] = useState();
  const [confirmedPassword, setconfirmedPassword] = useState();
  const [show, setshow] = useState(false);
  const [loading, setloading] = useState(false);
  const [toast, settoast] = useState(false);
  const [showA, setShowA] = useState(true);
  const [showB, setshowB] = useState(true);
  const [pwToast, setpwToast] = useState(false);
  // Function
  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setshowB(!showB);
  const submitHandler = async (e) => {
    e.preventDefault();
    setloading(true);
    if (password !== confirmedPassword) {
      setloading(false);
      setpwToast(true);
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const url = "http://localhost:5000/api/auth/signin";
      const { data } = axios.post(
        url,
        {
          name,
          email,
          password,
          pic,
        },
        config
      );
      console.log(data);
    } catch {}
  };
  const setProfile = (pics) => {
    if (pics === "undefined") settoast(true);
    if (pics.type === "image/jpeg" || pics.type === "image/jpg") {
      setloading(true);
      settoast(false);
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "nakama");
      data.append("cloud_name", "dbmgwlkte");
      fetch("https://api.cloudinary.com/v1_1/dbmgwlkte/image/upload", {
        method: "post",
        body: data,
      })
        .then((result) => result.json())
        .then((data) => {
          setloading(false);
          const picture = data.url.toString();
          setpic(picture);
        })
        .catch((error) => {
          console.log(error);
          setloading(false);
        });
    } else {
      settoast(true);
    }
  };

  return (
    // Form
    <Container fluid className="mt-2">
      {/* Toast */}
      {toast && (
        <ToastContainer className="p-3" position="bottom-center">
          <Toast
            show={showA}
            onClose={toggleShowA}
            className="bg-danger text-white"
            autohide="false"
            delay="3000"
          >
            <Toast.Header>
              <strong className="me-auto">Warning</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Please select a picture for profile</Toast.Body>
          </Toast>
        </ToastContainer>
      )}
      {/* Password Toast */}
      {pwToast && (
        <ToastContainer className="p-3" position="bottom-center">
          <Toast
            show={showB}
            onClose={toggleShowB}
            className="bg-danger text-white"
            autohide="false"
            delay="3000"
          >
            <Toast.Header>
              <strong className="me-auto">Warning</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Passwords don't match</Toast.Body>
          </Toast>
        </ToastContainer>
      )}
      {/* Form */}
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            required
            onChange={(e) => setname(e.target.value)}
          />
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
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
        <Form.Group className="mb-3">
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
            onChange={(e) => {
              setProfile(e.target.files[0]);
            }}
          />
        </Form.Group>

        <Button
          type="submit"
          style={{ width: "100%" }}
          className={`my-3 ${loading ? "disabled" : "bg-primary"}`}
        >
          Sign-in
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
