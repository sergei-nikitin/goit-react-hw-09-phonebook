import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../navigation/Navigation.module.css";
import routes from "../../routes";

const AuthNav = () => (
  <div>
    <NavLink
      className={styles.navLink}
      activeClassName={styles.active}
      to={routes.login}
    >
      Login
    </NavLink>

    <NavLink
      className={styles.navLink}
      activeClassName={styles.active}
      to={routes.register}
    >
      Register
    </NavLink>
  </div>
);

export default AuthNav;
