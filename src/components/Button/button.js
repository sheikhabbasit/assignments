import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import styles from "./button.module.css";

const Button = (props) => {
  const context = useContext(AuthContext);
  return (
    <button
      className={`${styles.button} ${
        context.darkModeOn ? styles.button_dark : styles.button_light
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
// {context.darkModeOn ? styles.button_dark : styles.button}
