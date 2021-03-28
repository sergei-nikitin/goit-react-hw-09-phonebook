import { React, Component } from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./ContactList.module.css";
import animation from "./AnimationContacts.module.css";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/pb-operations";
import { getContacts, getFilter } from "../../redux/contacts-selectors";
import IconButton from "../iconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CreateIcon from "@material-ui/icons/Create";
import Modal from "../modal";
import ModalForm from "../modalForm";

class ContactList extends Component {
  state = {
    modal: false,
    id: "",
  };

  list = (contactsList, filter) => {
    let x = contactsList.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    if (!x.length) {
      x = contactsList;
      filter = "";
    }
    return x;
  };

  toogleModal = (id) => {
    this.setState({
      id: id,
    });
    this.setState(({ modal }) => ({
      modal: !modal,
    }));
  };

  render() {
    let contacts = this.list(this.props.contacts, this.props.filter);
    const { modal } = this.state;

    return (
      <CSSTransition
        in={true}
        timeout={250}
        unmountOnExit
        classNames={animation}
      >
        <div className={styles.divContactList}>
          <h2 className={styles.title}>Contact list</h2>
          <TransitionGroup component="ul" className={styles}>
            {contacts.map((contact) => (
              <CSSTransition
                key={contact.id}
                timeout={250}
                classNames={animation}
              >
                <li className={styles.item}>
                  {contact.name}: {contact.number}
                  <IconButton
                    aria-label="openModal"
                    onClick={() => this.toogleModal(contact.id)}
                  >
                    <CreateIcon />
                  </IconButton>
                  <IconButton
                    aria-label="deleteContact"
                    onClick={() => this.props.onDeleteContact(contact.id)}
                  >
                    <HighlightOffIcon />
                  </IconButton>
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
          {modal && (
            <Modal onClose={this.toogleModal}>
              <ModalForm toogleModal={this.toogleModal} id={this.state.id} />
            </Modal>
          )}
        </div>
      </CSSTransition>
    );
  }
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

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
  filter: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
