import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Register.module.css";
import authOperations from "../../redux/auth/auth-operations";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    return (
      <div className={styles.mainDiv}>
        <form
          className={styles.formRegister}
          onSubmit={this.handleSubmit}
          autoComplete="of"
        >
          <label
            className={styles.labelRegister}
            htmlFor="inputRegisterName"
            name="email"
          >
            Name
          </label>
          <input
            className={styles.inputRegister}
            id="inputRegisterName"
            type="text"
            value={this.state.name}
            name="name"
            placeholder="Enter Name"
            onChange={this.handleChange}
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
            value={this.state.email}
            name="email"
            placeholder="Enter Email"
            onChange={this.handleChange}
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
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(Register);
