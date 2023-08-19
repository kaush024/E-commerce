import { Col, Form, Row } from "react-bootstrap";
import Icon from "../../Images/RegisterIcon.svg";
import Image from "next/image";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = () => {
  const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(4, "Too Short!")
      .max(12, "Too Long!")
      .required("Enter your first name"),
    lastname: Yup.string()
      .min(4, "Too Short!")
      .max(20, "Too Long!")
      .required("Enter your last name"),
    email: Yup.string()
      .email("Invalid email")
      .required("Enter a valid email address"),
    phoneNumber: Yup.string()
      .max(10, "Too Long!")
      .required("Phone Number must be of 10 digits"),
    password: Yup.string()
      .min(6, "Too Short")
      .max(10, "Too long!")
      .required("Enter a Password"),
  });

  return (
    <div style={{ display: "flex" }}>
      <div className="ms-5 mt-5 ps-5 pt-5 flex-grow-1 ">
        <h1>Register Your Account</h1>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Row className="mt-4">
                <Col>
                  <Form.Label>First Name</Form.Label>
                  <Field
                    name="firstname"
                    placeholder="firstname"
                    className="d-block border border-2 rounded-bottom-5 p-1 ps-3 pe-2"
                  />
                  <ErrorMessage
                    name="firstname"
                    component="div"
                    className="text-danger"
                  />
                </Col>

                <Col>
                  <Form.Label>Last Name</Form.Label>
                  <Field
                    name="lastname"
                    placeholder="Last Name"
                    className="d-block border border-2 rounded-bottom-5 p-1 ps-3 pe-2"
                  />
                  <ErrorMessage
                    name="lastname"
                    component="div"
                    className="text-danger"
                  />
                </Col>
              </Row>

              <Row className="mt-4">
                <Col>
                  <Form.Label>Email</Form.Label>
                  <Field
                    name="email"
                    placeholder="Email"
                    className="d-block border border-2 rounded-bottom-5 p-1 ps-3 pe-2"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </Col>

                <Col>
                  <Form.Label>Phone Number</Form.Label>
                  <Field
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="d-block border border-2 rounded-bottom-5 p-1 ps-3 pe-2"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-danger"
                  />
                </Col>
              </Row>

              <Row className="mt-4">
                <Col>
                  <Form.Label>Password</Form.Label>
                  <Field
                    name="password"
                    placeholder="Password"
                    className="d-block border border-2 rounded-bottom-5 p-1 ps-3 pe-2"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </Col>

                <Col>
                  <Form.Label>Confirm Password</Form.Label>
                  <Field
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="d-block border border-2 rounded-bottom-5 p-1 ps-3 pe-2"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-danger"
                  />
                </Col>
              </Row>
            </Form>
          )}
        </Formik>

<div className="d-flex judtify-content-between mt-5 ">

        <Form.Check label="I agree with terms and conditions" />
        <div style={{flex:"1",textAlign:"center"}}>

        <button className="btn btn-primary">Register</button>
        </div>
</div>
      </div>

      <div style={{ height: "100vh", width: "45%" }}>
        <Image
          src={Icon}
          alt="Network Error"
          style={{ maxHeight: "-webkit-fill-available" }}
        />
      </div>
    </div>
  );
};

export default Register;

// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from "yup";

// const SignupSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, 'Too Short!')
//     .max(70, 'Too Long!')
//     .required('Name dfdfssg'),

// });

// export const ValidationSchemaExample = () => (
//   <div>
//     <h1>Signup</h1>
//     <Formik
//       initialValues={{
//         name: '',
//         email: '',
//       }}
//       validationSchema={SignupSchema}
//       onSubmit={values => {
//         // same shape as initial values
//         console.log(values);
//       }}
//     >
//       {({ errors, touched }) => (
//         <Form>
//           <Field name="name" style={{border:'1px solid'}} />
//            {errors.name && touched.name ? (

//             <div style={{border:'1px solid'}}>{errors.name}  </div>): null}
//          <ErrorMessage name="name" />
//           <Field name="email" type="email" />
//            {errors.email && touched.email ? (
//             <div>{errors.email}</div>) : null}
//          <ErrorMessage name="email" />
//           <button type="submit">Submit</button>
//         </Form>
//       )}
//     </Formik>
//   </div>
// );

// export default ValidationSchemaExample;
