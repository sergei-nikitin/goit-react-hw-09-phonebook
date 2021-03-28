import React from "react";
import Navigations from "../navigation";
import AuthNav from "../authNav";
import UserMenu from "../userMenu";
import styles from "./Header.module.css";
import { connect } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";

const Header = ({ isAuthenticated }) => {
  return (
    <header className={styles.header}>
      <Navigations />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Header);
