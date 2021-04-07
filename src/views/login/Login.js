import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Login.module.css";
import authOperations from "../../redux/auth/auth-operations";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(authOperations.login({ email, password }));
    setPassword("");
    setEmail("");
  };

  return (
    <div className={styles.mainDiv}>
      <form
        className={styles.formLogin}
        onSubmit={handleSubmit}
        autoComplete="of"
      >
        <label
          className={styles.labelLogin}
          htmlFor="inputLoginEmail"
          name="email"
        >
          Email
        </label>
        <input
          className={styles.inputLogin}
          id="inputLoginEmail"
          type="text"
          value={email}
          name="email"
          placeholder="Enter Email"
          onChange={handleEmailChange}
        ></input>

        <label
          className={styles.labelLogin}
          htmlFor="inputLoginPassword"
          name="password"
        >
          Password
        </label>
        <input
          className={styles.inputLogin}
          id="inputLoginPassword"
          type="text"
          value={password}
          name="password"
          placeholder="Enter Password"
          onChange={handlePasswordChange}
        ></input>

        <button type="submit">Enter</button>
      </form>
    </div>
  );
}
