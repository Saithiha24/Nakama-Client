import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Toast, ToastContainer } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [pic, setpic] = useState();
  const [confirmedPassword, setconfirmedPassword] = useState();
  const [show, setshow] = useState(false);
  const [loading, setloading] = useState(false);
  //  Navigate
  const navigate = useNavigate();
  // toast

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
    if (!name || !email || !password) {
      toggleToast();
      alertToast("danger", "Please fill all the fields");
      setloading(false);
      return;
    }
    if (password !== confirmedPassword) {
      setloading(false);
      toggleToast();
      alertToast("danger", "Passwords don't match");
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
            name,
            email,
            password,
            pic,
          },
          config
        );
        console.log(data);
        setloading(false);
        toggleToast();
        alertToast("success", "Signin successfully");
        navigate("/chat");
      } catch (error) {
        setloading(false);
        toggleToast();
        alertToast("danger", "Signin failed");
        console.log(error);
      }
  };
  // For profile picture
  const setProfile = (pics) => {
    if (pics === "undefined") {
      setloading(false);
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/jpg") {
      setloading(true);
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
          toggleToast();
          alertToast("success", "You select the profile picture");
        })
        .catch((error) => {
          console.log(error);
          setloading(false);
        });
    }
  };

  return (
    <div className="mt-2">
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
      {/* Form */}
      {/* Name */}
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            onChange={(e) => setname(e.target.value)}
          />
        </Form.Group>

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
        {/* Confirm password */}
        <Form.Group className="mb-3">
          <Form.Label>Confirmed Password</Form.Label>
          <div className="d-flex">
            <Form.Control
              type={show ? "text" : "password"}
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
    </div>
  );
};

export default SignIn;
