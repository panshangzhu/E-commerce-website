import React from "react";
import Navigation from "../Navigation";
import { Form, Field, withFormik } from "formik";
import { connect } from "react-redux";
import { loginAction } from "../Actions/LoginAction";
import {Link} from 'react-router-dom'

function LoginForm(props) {
  const { touched, errors, handleSubmit,submitting } = props;
  return (
    <div>
      <Navigation title="Login" />
      <br />
      <br />
      <br />
      <Form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row justify-content-xl-center">
            <div className="form-group col-ms-12 col-md-12 col-xl-8 ">
              <label>Email: </label>
              <Field className="form-control" name="email" type="email" />
              {errors.email && touched.email ? (
                <div className="text-danger">{errors.email}</div>
              ) : null}
            </div>
          </div>
          <div className="row justify-content-xl-center">
            <div className="form-group col-ms-12 col-md-12 col-xl-8 ">
              <label>Password: </label>
              <Field className="form-control" name="password" type="password" />
              {errors.password && touched.password ? (
                <div className="text-danger">{errors.password}</div>
              ) : null}
            </div>
          </div>
          <div className="row justify-content-center">
            <button
              className="btn btn-info mr-4"
              type="submit"
              disabled={submitting}
            >
              Submit
            </button>
            <Link to="/register">
              <button className="btn btn-warning ml-4" type="button">
                Register
              </button>
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
}
const loginForm = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  validate: (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "required!";
    }
    if (!values.password) {
      errors.password = "password cannot be empty";
    }
    return errors;
  },
  handleSubmit: (values,{props, setSubmitting }) => {
    setTimeout(() => {
      console.log("formvalues: "+ values);
      props.loginAction(values);
      setSubmitting(false);
    }, 1000);
  },
})(LoginForm);

const mapStateToProps = (state, ownProps) => {
  return {
    account: state.loginReducer,
  };
};
export default connect(mapStateToProps, { loginAction })(loginForm);
