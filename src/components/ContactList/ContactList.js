import React, { useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./ContactList.module.css";
import popIn from "../../utils/transitions/pop.module.css";
import slideIn from "../../utils/transitions/slide.module.css";

const ContactList = ({
  contactList,
  setContactList,
  saveToStorage,
  getFromStorage,
  filteredList,
  query,
}) => {
  const onDelete = (id) => {
    const updatedList = contactList.filter((contact) => contact.id !== id);
    setContactList([...updatedList]);
  };

  const contactsFromLS = getFromStorage("contacts");

  useEffect(() => {
    setContactList(contactsFromLS);
  }, []);

  useEffect(() => {
    saveToStorage("contacts", contactList);
  }, [contactList]);

  const list = !query.length ? contactList : filteredList;
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
        {list.map((contact) => (
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

export default ContactList;
