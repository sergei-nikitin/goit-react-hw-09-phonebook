import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import styles from "./Navigation.module.css";
import { connect } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";

const Navigation = ({ isAuthenticated }) => {
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
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
