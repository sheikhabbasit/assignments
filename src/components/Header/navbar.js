import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import Button from "../Button/button";
import styles from "./navbar.module.css";
const Navbar = (props) => {
  const context = useContext(AuthContext);

  const toggleDarkMode = () => {
    context.toggleDarkMode();
    console.log(context.darkModeOn);
  };
  return (
    <div
      className={`${styles.navbar} ${
        context.darkModeOn ? styles.navbar_dark : ""
      }`}
    >
      <NavLink
        className={styles.navlink}
        activeClassName={styles.active_navlink}
        to="/counter"
      >
        Counter
      </NavLink>
      <NavLink
        className={styles.navlink}
        activeClassName={styles.active_navlink}
        to="/counter-w-redux"
      >
        Redux Counter
      </NavLink>
      <NavLink
        className={styles.navlink}
        activeClassName={styles.active_navlink}
        to="/demo-social-media"
      >
        Social Site
      </NavLink>
      <Button onClick={toggleDarkMode}>
        {context.darkModeOn ? "Light Mode" : "Dark Mode"}
      </Button>
    </div>
  );
};
export default Navbar;
