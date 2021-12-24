import React, { Fragment, useState } from "react";
import Button from "../../components/Button/button";
import styles from "./counter.module.css";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);

  const incrementHandler = () => {
    setCounter((prevState) => prevState + 1);
  };

  const decrementHandler = () => {
    setCounter((prevState) => prevState - 1);
  };

  return (
    <Fragment>
      <h1>Counter is here</h1>
      <div className={styles.counter}>
        <Button onClick={decrementHandler}>-</Button>
        <h2>{counter}</h2>
        <Button onClick={incrementHandler}>+</Button>
      </div>
    </Fragment>
  );
};
export default Counter;
