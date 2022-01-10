import React from "react";
import { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Counter from "../pages/counter/counter";
import CounterRedux from "../pages/counterWithRedux/counterWithRedux";
import Error404 from "../pages/Error404";
import Dashboard from "../pages/private/Dashboard/dashboard";
import SocialMedia from "../pages/public";
import Login from "../pages/public/login/Login";
import SignUp from "../pages/public/signup/SignUp";

const AppRouter = (props) => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          {/* Allows redirect to the counter page on visiting the root of website */}
          <Redirect to="/counter"></Redirect>
        </Route>
        <Route exact path="/counter">
          <Counter />
        </Route>
        <Route exact path="/counter-w-redux">
          <CounterRedux />
        </Route>
        <Route exact path="/demo-social-media">
          <SocialMedia />
        </Route>
        <Route exact path="/demo-social-media/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/demo-social-media/sign-up">
          <SignUp />
        </Route>
        <Route exact path="/demo-social-media/login">
          <Login />
        </Route>
        <Route exact path="*">
          <Error404 />
        </Route>
      </Switch>
    </Fragment>
  );
};
export default AppRouter;
