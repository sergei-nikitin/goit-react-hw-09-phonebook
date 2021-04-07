import React from "react";
import Navigations from "../navigation";
import AuthNav from "../authNav";
import UserMenu from "../userMenu";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";

export default function Header() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <header className={styles.header}>
      <Navigations />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
