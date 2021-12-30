import React, { Fragment, useRef } from "react";
import Card from "../../../components/Card/Card";
import Navbar from "../../../components/Header/navbar";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";

const SignUp = (props) => {
  // Registering refs
  const userNameValue = useRef();
  const emailValue = useRef();
  const passwordValue = useRef();

  // Checks if there are any users in the localStorage, if not, sets it to an empty object
  const usersByEmail = localStorage.getItem("usersByEmail")
    ? JSON.parse(localStorage.getItem("usersByEmail"))
    : {};

  // Handles submitting of form
  const signUpHandler = (e) => {
    e.preventDefault();
    // Takes value from refs (forms)
    const emailID = emailValue.current.value;
    const username = userNameValue.current.value;
    const password = passwordValue.current.value;

    // Checks if the email already exists
    if (usersByEmail[emailID]) {
      alert("User already exists");
    } else {
      // If everything alright, then goes ahead to add user to localStorage
      usersByEmail[emailID] = {
        email: emailID,
        username,
        password,
      };

      localStorage.setItem("usersByEmail", JSON.stringify(usersByEmail));

      // Clears input fields
      emailValue.current.value = "";
      userNameValue.current.value = "";
      passwordValue.current.value = "";
    }
  };

  return (
    <Fragment>
      <Navbar />
      <Card className={styles.card}>
        <h1>Sign Up</h1>
        <form className={styles.form} onSubmit={signUpHandler}>
          <label htmlFor="username">Username:</label>
          <br></br>
          <input required ref={userNameValue} id="username" type="text" />
          <br></br>
          <label htmlFor="email">Email:</label>
          <br></br>
          <input required ref={emailValue} id="email" type="email" />
          <br></br>
          <label htmlFor="password">Password:</label>
          <br></br>
          <input required ref={passwordValue} id="password" type="password" />
          <br></br>
          <br></br>
          <button type="submit">Submit</button>
        </form>
        <h4>Already a user?</h4>
        <Link className={styles.link} to="/demo-social-media/login">
          Login
        </Link>
      </Card>
    </Fragment>
  );
};
export default SignUp;
