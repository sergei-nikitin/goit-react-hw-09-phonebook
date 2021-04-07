import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-operations";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const logout = useCallback(() => dispatch(authOperations.logOut()), [
    dispatch,
  ]);
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={styles.divUserMenu}>
      <span className={styles.span}>Welcome, {name}!</span>
      <button className={styles.btnExit} type="button" onClick={logout}>
        Exit
      </button>
    </div>
  );
}
