import React from "react";
import useTheme from "../../hooks/useTheme";
import styles from "./button.module.css";

const Button = (props) => {
  const darkTheme = useTheme();
  return (
    <button
      className={`${styles.button} ${
        darkTheme ? styles.button_dark : styles.button_light
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
// {context.darkModeOn ? styles.button_dark : styles.button}
