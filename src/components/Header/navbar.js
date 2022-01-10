import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import { ThemeContext } from "../../themes/ThemeContext";
import Button from "../Button/button";
import styles from "./navbar.module.css";
const Navbar = () => {
  const darkTheme = useTheme();
  const context = useContext(ThemeContext);
  const toggleDarkMode = () => {
    context.toggleDarkMode();
  };
  return (
    <div className={`${styles.navbar} ${darkTheme ? styles.navbar_dark : ""}`}>
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
        {context ? "Light Mode" : "Dark Mode"}
      </Button>
    </div>
  );
};
export default Navbar;
