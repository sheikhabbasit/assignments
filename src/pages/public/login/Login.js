import React, { Fragment, useRef } from "react";
import { useHistory } from "react-router-dom";
import Card from "../../../components/Card/Card";
import Navbar from "../../../components/Header/navbar";
import styles from "./Login.module.css";
const Login = (props) => {
  let history = useHistory();

  const receivedEmailID = useRef();
  const receivedPassword = useRef();
  const users = JSON.parse(localStorage.getItem("usersByEmail"));

  const loginHandler = (e) => {
    e.preventDefault();
    const rxEmail = receivedEmailID.current.value;
    const rxPassword = receivedPassword.current.value;

    const user = users[rxEmail];
    if (users[rxEmail]) {
      if (user.password === rxPassword) {
        console.log("Logged in");
        history.push("/demo-social-media/dashboard");
      } else {
        alert("Wrong Password");
      }
    } else {
      alert("User not found!");
    }
  };
  return (
    <Fragment>
      <Navbar />
      <Card>
        <form className={styles.form} onSubmit={loginHandler}>
          <h1>Login Page</h1>
          <label htmlFor="email">Email:</label>
          <br></br>
          <input required ref={receivedEmailID} id="email" type="email" />
          <br></br>
          <label htmlFor="password">Password:</label>
          <br></br>
          <input
            required
            ref={receivedPassword}
            id="password"
            type="password"
          />
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </Card>
    </Fragment>
  );
};
export default Login;
