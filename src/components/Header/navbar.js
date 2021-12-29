import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
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
    </div>
  );
};
export default Navbar;
