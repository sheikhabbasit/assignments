import React from "react";
import { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Counter from "../pages/counter/counter";
import CounterRedux from "../pages/counterWithRedux/counterWithRedux";

const AppRouter = (props) => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/counter"></Redirect>
        </Route>
        <Route exact path="/counter">
          <Counter />
        </Route>
        <Route exact path="/counter-w-redux">
          <CounterRedux />
        </Route>
      </Switch>
    </Fragment>
  );
};
export default AppRouter;
