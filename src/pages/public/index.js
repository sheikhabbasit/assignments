import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
// import { Route } from "react-router-dom";
// import Login from "./login/Login";
import SignUp from "./signup/SignUp";
const SocialMedia = (props) => {
  return (
    <Fragment>
      {/* <Route exact path="/demo-social-media/sign-up">
        <SignUp />
      </Route> */}
      <Route path="/demo-social-media" exact>
        <Redirect to="/demo-social-media/sign-up"></Redirect>
      </Route>
    </Fragment>
  );
};
export default SocialMedia;
