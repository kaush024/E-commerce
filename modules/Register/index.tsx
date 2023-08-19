import { Col, Form, Row } from "react-bootstrap";
import Icon from "../../Images/RegisterIcon.svg";
import Image from "next/image";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = () => {
  const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      
      .required("First Name requirde"),
    lastname: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("lastname required"),
  });
  return (
    <div style={{ display: "flex" }}>
      <div>
        <h1>Input Your Information</h1>
        <Formik
          initialValues={{
            firstname: "",
            Lastname: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Row>
                <Col>
                  <Form.Label name="firstname">First name</Form.Label>
                  <Field
                    type="text"
                    id="name"
                    name="firstname"
                    placeholder="First name"
                    style={{border:'1px solid'}}

                    className={
                      touched.firstname && errors.firstname ? "error" : ""
                    }
                  />
                  <ErrorMessage
                    name="firstname"
                    component="div"
                    className="error-message"
                  />
                </Col>

                <Col>
                  <Form.Label name="Lastname">Last name</Form.Label>
                  <Field
                    type="text"
                    id="name"
                    name="Lastname"
                    placeholder="Last name"
                    style={{border:'1px solid'}}

                    className={
                      touched.Lastname && errors.Lastname ? "error" : ""
                    }
                  />
                  <ErrorMessage
                    name="Lastname"
                    component="div"
                    className="error-message"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label>Company</Form.Label>

                  <Form.Control placeholder="Company" />
                </Col>
                <Col>
                  <Form.Label>Website</Form.Label>

                  <Form.Control placeholder="Website" />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label>number of Employees</Form.Label>

                  <Form.Control placeholder="number of Employees" />
                </Col>
                <Col>
                  <Form.Label>Phone Number</Form.Label>

                  <Form.Control placeholder="Phone Number" />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label>Password</Form.Label>

                  <Form.Control placeholder="Password" />
                </Col>
                <Col>
                  <Form.Label>Confirm Password</Form.Label>

                  <Form.Control placeholder="Confirm Password" />
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </div>

      <div style={{ height: "100vh" }}>
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
fgfgdfbdbgdbgfdgnfhnghnhgnghnhngh