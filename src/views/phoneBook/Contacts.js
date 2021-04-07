import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/pb-operations";
import styles from "./Contacts.module.css";
import ContactList from "../../components/contacts";
import Form from "../../components/form";
import Filter from "../../components/filter";
import Title from "../../components/title";

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.mainDiv}>
      <Title />
      <Form />
      <Filter />
      <ContactList />
    </div>
  );
}
