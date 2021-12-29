import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Header/navbar";
import styles from "./Error404.module.css";
const Error404 = (props) => {
  return (
    <Fragment>
      <Navbar />
      <div className={styles.error}>
        <h1>Error 404</h1>
        <h6>Not Found</h6>
        <Link to="/">Back to Home</Link>
      </div>
    </Fragment>
  );
};
export default Error404;
