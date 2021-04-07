import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Register.module.css";
import authOperations from "../../redux/auth/auth-operations";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;

  //     case 'email':
  //       setEmail(value);
  //       break;
  //     case 'password':
  //       setPassword(value);
  //       break;

  //     default:
  //       console.warn('text')
  //   }
  // };

  // handleChange = ({ target: { name, value } }) => {
  //   this.setState({ [name]: value });
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setPassword("");
    setEmail("");
    setName("");
  };

  return (
    <div className={styles.mainDiv}>
      <form
        className={styles.formRegister}
        onSubmit={handleSubmit}
        autoComplete="of"
      >
        <label
          className={styles.labelRegister}
          htmlFor="inputRegisterName"
          name="name"
        >
          Name
        </label>
        <input
          className={styles.inputRegister}
          id="inputRegisterName"
          type="text"
          value={name}
          name="name"
          placeholder="Enter Name"
          onChange={handleNameChange}
        ></input>

        <label
          className={styles.labelRegister}
          htmlFor="inputRegisterEmail"
          name="email"
        >
          Email
        </label>
        <input
          className={styles.inputRegister}
          id="inputRegisterEmail"
          type="text"
          value={email}
          name="email"
          placeholder="Enter Email"
          onChange={handleEmailChange}
        ></input>

        <label
          className={styles.labelRegister}
          htmlFor="inputRegisterPassword"
          name="password"
        >
          Password
        </label>
        <input
          className={styles.inputRegister}
          id="inputRegisterPassword"
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
