import React, { Fragment, useContext } from "react";
import Navbar from "../../components/Header/navbar";
import Button from "../../components/Button/button";
import styles from "./counterWithRedux.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../../redux/reduxCounter/counterSlice";
import { AuthContext } from "../../auth/AuthContext";

const CounterRedux = () => {
  const context = useContext(AuthContext);
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.counter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <Fragment>
      <Navbar />
      <h1 className={context.darkModeOn ? styles.dark_counter : ""}>
        Hello to Redux Counter
      </h1>
      <div
        className={`${styles.counter} ${
          context.darkModeOn ? styles.dark_counter : ""
        }`}
      >
        <Button onClick={decrementHandler}>-</Button>
        <h2>{count}</h2>
        <Button onClick={incrementHandler}>+</Button>
      </div>
    </Fragment>
  );
};
export default CounterRedux;
