import React, { useEffect, useState } from "react";
import Navigation from "../Navigation";
import { Form, Formik, Field } from "formik";
import { connect } from "react-redux";
import { addUser } from "../Actions/UsersAction";
import * as Yup from "yup";
import UserApi from "../Apis/UserApi";



const Obj = "/user";

function Register(props) {
 
  let [emails,setEmails]=useState([]);
useEffect(() => {
  UserApi.get(Obj)
    .then((response) => response.data).then(data=>setEmails(data.map(d=>d.email)))
    .catch((e) => alert(e));
}, []);

console.log(emails)

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").notOneOf(emails,"email already registered").required("Required"),
  password: Yup.string().required("Password is required"),
  comfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("required"),
  telephone: Yup.string()
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
      "Invalid"
    )
    .required("Required"),
});


  return (
    <div>
      <Navigation title="Sign Up" />
      <br />
      <br />
      <br />
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          comfirm: "",
          telephone: "",
          carts:[]
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          props.addUser(values);
        }}
      >
        {({ errors, touched, submitting, pristine, resetForm }) => (
          <div className="container">
            <Form>
              <div className="row justify-content-xl-center">
                <Field name="carts" type="hidden" />
                <div className="form-group col-ms-12 col-md-12 col-xl-8 ">
                  <label>Name: </label>
                  <Field className="form-control" name="name" type="text" />
                  {errors.name && touched.name ? (
                    <div className="text-danger">{errors.name}</div>
                  ) : null}
                </div>
              </div>
              <br />
              <div className="row justify-content-xl-center">
                <div className="form-group col-ms-12 col-md-12 col-xl-8 ">
                  <label>Email: </label>
                  <Field className="form-control" name="email" type="email" />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                  {errors.email && touched.email ? (
                    <div className="text-danger">{errors.email}</div>
                  ) : null}
                </div>
              </div>
              <br />
              <div className="row justify-content-xl-center">
                <div className="form-group col-ms-12 col-md-12 col-xl-8 ">
                  <label>Password: </label>
                  <Field
                    className="form-control"
                    name="password"
                    type="password"
                  />
                  {errors.password && touched.password ? (
                    <div className="text-danger">{errors.password}</div>
                  ) : null}
                </div>
              </div>
              <br />
              <div className="row justify-content-xl-center">
                <div className="form-group col-ms-12 col-md-12 col-xl-8 ">
                  <label>Confirm Password: </label>
                  <Field
                    className="form-control"
                    name="comfirm"
                    type="password"
                  />
                  {errors.comfirm && touched.comfirm ? (
                    <div className="text-danger">{errors.comfirm}</div>
                  ) : null}
                </div>
              </div>
              <br />
              <div className="row justify-content-xl-center">
                <div className="form-group col-ms-12 col-md-12 col-xl-8 ">
                  <label>Telephone: </label>
                  <Field
                    className="form-control"
                    name="telephone"
                    type="text"
                  />
                  {errors.telephone && touched.telephone ? (
                    <div className="text-danger">{errors.telephone}</div>
                  ) : null}
                </div>
              </div>
              <br />
              <div className="row justify-content-center">
                <button
                  className="btn btn-info mr-4"
                  type="submit"
                  disabled={submitting}
                >
                  Submit
                </button>
                <button
                  className="btn btn-warning ml-4"
                  onClick={resetForm}
                  type="button"
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
export default connect(null, { addUser })(Register);
