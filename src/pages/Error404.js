import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Header/navbar";
import useTheme from "../hooks/useTheme";
import styles from "./Error404.module.css";
const Error404 = (props) => {
  const darkTheme = useTheme();
  return (
    <Fragment>
      <Navbar />
      <div className={`${styles.error} ${darkTheme ? styles.dark_error : ""}`}>
        <h1>Error 404</h1>
        <h6>Not Found</h6>
        <Link className={darkTheme ? styles.link : ""} to="/">
          Back to Home
        </Link>
      </div>
    </Fragment>
  );
};
export default Error404;
