import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./InputForm.module.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InputForm = ({ contactList, setContactList }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const changeHandler = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "number") {
      setNumber(e.target.value);
    }
  };

  const addContact = () => {
    const contactListNames = contactList.map((contact) =>
      contact.name.toLowerCase()
    );
    const newContactName = name.toLowerCase();
    if (contactListNames.includes(newContactName)) {
      toast.configure();
      toast.error(`${name} is already in your contact list`);
    } else {
      setContactList([
        { id: uuidv4(), name: name, number: number },
        ...contactList,
      ]);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addContact();

    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={changeHandler}
          className={styles.inputField}
        />
      </label>
      <label>
        Number:
        <input
          type="text"
          name="number"
          value={number}
          onChange={changeHandler}
          className={styles.inputField}
        />
      </label>
      <button
        type="submit"
        disabled={!name.length || !number.length}
        className={styles.btn}
      >
        Add contact
      </button>
    </form>
  );
};

export default InputForm;
