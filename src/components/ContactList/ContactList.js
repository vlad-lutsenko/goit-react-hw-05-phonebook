import React, { useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import popIn from "../../utils/transitions/pop.module.css";
import slideIn from "../../utils/transitions/slide.module.css";
import styles from "./ContactList.module.css";

const ContactList = ({
  contactList,
  setContactList,
  query,
  saveToStorage,
  getFromStorage,
}) => {
  const onDelete = (id) => {
    const updatedList = contactList.filter((contact) => contact.id !== id);
    setContactList([...updatedList]);
  };

  const filteredList = contactList.filter(
    (contact) =>
      contact.name.toLowerCase().includes(query.toLowerCase().trim()) ||
      contact.number.includes(query.trim())
  );

  useEffect(() => {
    setContactList(getFromStorage("contacts"));
  }, [setContactList, getFromStorage]);

  useEffect(() => {
    saveToStorage("contacts", contactList);
  }, [contactList, saveToStorage]);

  return (
    <>
      <CSSTransition
        in={!contactList.length}
        timeout={250}
        classNames={slideIn}
        mountOnEnter
        unmountOnExit
      >
        <p>Phonebook is empty</p>
      </CSSTransition>

      <TransitionGroup component="ul" className={styles.contactList}>
        {filteredList.map((contact) => (
          <CSSTransition key={contact.id} classNames={popIn} timeout={250}>
            <li className={styles.contactListItem}>
              <span className={styles.name}>{contact.name}</span>
              <span className={styles.number}>{contact.number}</span>
              <button type="button" onClick={() => onDelete(contact.id)}>
                &#215;
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    PropTypes.array,
  ]).isRequired,
  setContactList: PropTypes.func.isRequired,
  saveToStorage: PropTypes.func.isRequired,
  getFromStorage: PropTypes.func.isRequired,
  query: PropTypes.string,
};

export default ContactList;
