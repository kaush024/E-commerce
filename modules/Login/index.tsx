import Image from "next/image";
import Layer from "../../Images/Layer 11.svg";
import Vector from "../../Images/Vector.svg";
import Password from "../../Images/Password.svg";
import Form from "react-bootstrap/Form";
import QuestionMark from "../../Images/question mark.svg";
import Button from "react-bootstrap/Button";

import React from "react";
import { InputGroup } from "react-bootstrap";
const Login=() =>{
  return (
    <>
      <div className="d-flex">
        <div className="p-5 m-5 pb-2 mb-0">
          <div>
            <h1 className="fw-bold">Log in</h1>
            <p className="mt-4 mb-4">
              Please input your information in the fields below to enter your
              Journey platform.
            </p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h6>Account</h6>
            <Image src={QuestionMark} alt="Network Error" />
          </div>

          <div>
            <InputGroup className="mb-3 ">
              <InputGroup.Text
                id="basic-addon1"
                className="d-block"
                style={{ backgroundColor: "white" }}
              >
                <Image src={Vector} alt="Network Error" />
              </InputGroup.Text>
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                style={{ borderLeft: "0px" }}
              />
            </InputGroup>
            <InputGroup className="mb-3 ">
              <InputGroup.Text id="basic-addon1">
                <Image src={Password} alt="Network Error" />
              </InputGroup.Text>
              <Form.Control
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                style={{ borderLeft: "0px" }}
              />
            </InputGroup>
          </div>

          <h6 className="text-primary">Forgot your Password?</h6>

          <div className="d-flex justify-content-between mt-3">
            <Form.Check label="Remember Me" />
            <Button variant="primary">Login</Button>
          </div>

          <div
            className="text-center"
            style={{
              display: " flex",
              minHeight: " 15vh",
              flexDirection: "column",
              justifyContent: "space-between",
              margin: "0",
            }}
          >
            <h6 className="text-secondary" style={{ marginTop: "auto" }}>
              Dont have an account yet?
            </h6>
            <h6 className="text-primary">Register here</h6>
          </div>
        </div>

        <div style={{ height: "100vh" }}>
          <Image
            src={Layer}
            alt="Network Error"
            style={{ maxHeight: "-webkit-fill-available" }}
          />
        </div>
      </div>
    </>
  );
}

export default Login;
