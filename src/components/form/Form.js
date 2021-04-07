import React, { useState } from "react";
import styles from "./Form.module.css";
import shortid from "shortid";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/pb-operations";
import { Alert, AlertTitle } from "@material-ui/lab";
import { CSSTransition } from "react-transition-group";
import animation from "../contacts/AnimationContacts.module.css";
import { getContacts } from "../../redux/contacts-selectors";

export default function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [alert, setAlert] = useState(false);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const inputNameId = shortid.generate();
  const inputNumberId = shortid.generate();

  const includeContact = (nAme, num) => {
    if (contacts.some((contact) => contact.name === nAme)) {
      return setTimeout(() => setAlert(false), 2000), setAlert(true);
    } else {
      dispatch(addContact(nAme, num));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    includeContact(name, number);
    setName("");
    setNumber("");
  };

  return (
    <div>
      <CSSTransition
        in={alert}
        timeout={250}
        unmountOnExit
        classNames={animation}
      >
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          <strong>Try once more</strong>
        </Alert>
      </CSSTransition>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor={inputNameId} name="name">
          Name
        </label>
        <input
          className={styles.input}
          id={inputNameId}
          type="text"
          value={name}
          name="name"
          placeholder="Enter Name"
          onChange={handleNameChange}
        ></input>

        <label className={styles.label} htmlFor={inputNumberId} name="number">
          Number
        </label>
        <input
          className={styles.input}
          id={inputNumberId}
          type="phone"
          value={number}
          name="number"
          placeholder="Enter Number"
          onChange={handleNumberChange}
        ></input>

        <button className={styles.addBtn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}
