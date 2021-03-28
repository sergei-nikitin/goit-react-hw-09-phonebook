import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchContacts } from "../../redux/pb-operations";
import styles from "./Contacts.module.css";
import ContactList from "../../components/contacts";
import Form from "../../components/form";
import Filter from "../../components/filter";
import Title from "../../components/title";

class Contacts extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <div className={styles.mainDiv}>
        <Title />
        <Form />
        <Filter />
        <ContactList />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onFetchContacts: () => dispatch(fetchContacts()),
});

export default connect(null, mapDispatchToProps)(Contacts);
