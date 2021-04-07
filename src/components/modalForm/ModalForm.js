import { React, useState, useEffect } from "react";
import styles from "../form/Form.module.css";
import shortid from "shortid";
import { useDispatch } from "react-redux";
import { patchContact } from "../../redux/pb-operations";

export default function Modalform(props) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [id, setId] = useState({ ...props.id });
  useEffect(() => {
    setId(props.id);
  }, [props.id]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(patchContact(id, name, number));
    setName("");
    setNumber("");
    setId("");
    props.toogleModal();
  };

  const modalInputNameId = shortid.generate();
  const modalInputNumberId = shortid.generate();

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor={modalInputNameId} name="name">
          Name
        </label>
        <input
          className={styles.input}
          id={modalInputNameId}
          type="text"
          value={name}
          name="name"
          placeholder="Enter Name"
          onChange={handleNameChange}
        ></input>

        <label
          className={styles.label}
          htmlFor={modalInputNumberId}
          name="number"
        >
          Number
        </label>
        <input
          className={styles.input}
          id={modalInputNumberId}
          type="phone"
          value={number}
          name="number"
          placeholder="Enter Number"
          onChange={handleNumberChange}
        ></input>

        <button className={styles.addBtn} type="submit">
          Patch
        </button>
      </form>
    </div>
  );
}
