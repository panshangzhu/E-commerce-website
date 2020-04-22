import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Navigation from "../Navigation";

function Login(props) {
  return (
    <div>
      {props.account.isLogin ? (
        <div>
          <Navigation title="login" />
          <br />
          <br />
          <br />
          <Typography variant="h5">
            You have logged In! <Link to="/">Home</Link>
          </Typography>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    account: state.loginReducer,
  };
};
export default connect(mapStateToProps, {})(Login);
