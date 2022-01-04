import React from "react";
import useTheme from "../../hooks/useTheme";
import styles from "./Card.module.css";
const Card = (props) => {
  const darkTheme = useTheme();

  return (
    <div className={`${styles.card} ${darkTheme ? styles.card_dark : ""}`}>
      {props.children}
    </div>
  );
};
export default Card;
