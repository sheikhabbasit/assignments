import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import styles from "./Card.module.css";
const Card = (props) => {
  const context = useContext(AuthContext);
  return (
    <div
      className={`${styles.card} ${context.darkModeOn ? styles.card_dark : ""}`}
    >
      {props.children}
    </div>
  );
};
export default Card;
