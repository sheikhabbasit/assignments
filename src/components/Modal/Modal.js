import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={styles.backdrop}></div>;
};

const Photo = (props) => {
  return (
    <img
      onClick={props.onClick}
      className={styles.modal}
      src={props.url}
      alt="img"
    />
  );
};
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <Photo url={props.url} onClick={props.onClick} />,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};
export default Modal;
