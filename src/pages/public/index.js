import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";

const SocialMedia = (props) => {
  return (
    <Fragment>
      <Route path="/demo-social-media" exact>
        <Redirect to="/demo-social-media/sign-up"></Redirect>
      </Route>
    </Fragment>
  );
};
export default SocialMedia;
