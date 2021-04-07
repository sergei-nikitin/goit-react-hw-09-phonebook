import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import styles from "./Navigation.module.css";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <nav>
      <NavLink
        className={styles.navLink}
        activeClassName={styles.active}
        exact
        to={routes.home}
      >
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
          className={styles.navLink}
          activeClassName={styles.active}
          to={routes.contacts}
        >
          PhoneBook
        </NavLink>
      )}
    </nav>
  );
}
