import { React, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./ContactList.module.css";
import animation from "./AnimationContacts.module.css";
import { deleteContact } from "../../redux/pb-operations";
import { getContacts, getFilter } from "../../redux/contacts-selectors";
import IconButton from "../iconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CreateIcon from "@material-ui/icons/Create";
import Modal from "../modal";
import ModalForm from "../modalForm";

export default function ContactList() {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState("");

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const list = (contactsList, filter) => {
    let x = contactsList.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    if (!x.length) {
      x = contactsList;
      filter = "";
    }
    return x;
  };

  const toogleModal = useCallback((id) => {
    setId(id);
    setModal((prevModal) => !prevModal);
  }, []);

  let listContacts = list(contacts, filter);

  return (
    <CSSTransition in={true} timeout={250} unmountOnExit classNames={animation}>
      <div className={styles.divContactList}>
        <h2 className={styles.title}>Contact list</h2>
        <TransitionGroup component="ul" className={styles}>
          {listContacts.map((contact) => (
            <CSSTransition
              key={contact.id}
              timeout={250}
              classNames={animation}
            >
              <li className={styles.item}>
                {contact.name}: {contact.number}
                <IconButton
                  aria-label="openModal"
                  onClick={() => toogleModal(contact.id)}
                >
                  <CreateIcon />
                </IconButton>
                <IconButton
                  aria-label="deleteContact"
                  onClick={() => dispatch(deleteContact(contact.id))}
                >
                  <HighlightOffIcon />
                </IconButton>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
        {modal && (
          <Modal onClose={toogleModal}>
            <ModalForm toogleModal={toogleModal} id={id} />
          </Modal>
        )}
      </div>
    </CSSTransition>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
