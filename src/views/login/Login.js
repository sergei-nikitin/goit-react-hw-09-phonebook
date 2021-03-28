import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Login.module.css";
import authOperations from "../../redux/auth/auth-operations";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onLogin(this.state);
    this.setState({ name: "", password: "" });
  };

  render() {
    return (
      <div className={styles.mainDiv}>
        <form
          className={styles.formLogin}
          onSubmit={this.handleSubmit}
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
            value={this.state.email}
            name="email"
            placeholder="Enter Email"
            onChange={this.handleChange}
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
            value={this.state.password}
            name="password"
            placeholder="Enter Password"
            onChange={this.handleChange}
          ></input>

          <button type="submit">Enter</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(Login);
