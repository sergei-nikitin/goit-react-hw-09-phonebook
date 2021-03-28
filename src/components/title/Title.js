import React from "react";
import { CSSTransition } from "react-transition-group";
import titleStyles from "./Title.module.css";

const PhoneBook = () => {
  return (
    <CSSTransition
      appear={true}
      in={true}
      classNames={titleStyles}
      timeout={500}
      unmountOnExit
    >
      <h2 className={titleStyles.title}>Phonebook</h2>
    </CSSTransition>
  );
};

export default PhoneBook;
