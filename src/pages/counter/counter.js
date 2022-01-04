import React, { Fragment, useState } from "react";
import Button from "../../components/Button/button";
import Navbar from "../../components/Header/navbar";
import styles from "./counter.module.css";
import useTheme from "../../hooks/useTheme";

const Counter = (props) => {
  const darkTheme = useTheme();
  const [counter, setCounter] = useState(0);

  const incrementHandler = () => {
    setCounter((prevState) => prevState + 1);
  };

  const decrementHandler = () => {
    setCounter((prevState) => prevState - 1);
  };

  return (
    <Fragment>
      <Navbar />
      <h1 className={darkTheme ? styles.dark_counter : ""}>Counter is here</h1>
      <div
        className={`${styles.counter} ${darkTheme ? styles.dark_counter : ""}`}
      >
        <Button onClick={decrementHandler}>-</Button>
        <h2>{counter}</h2>
        <Button onClick={incrementHandler}>+</Button>
      </div>
    </Fragment>
  );
};
export default Counter;
