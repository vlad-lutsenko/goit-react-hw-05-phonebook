import React from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import styles from "./ContactsFilter.module.css";
import slideIn from "../../utils/transitions/slide.module.css";

const ContactsFilter = ({ contactList, setQuery }) => {
  const inputChangeHandler = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  return (
    <>
      <CSSTransition
        in={contactList.length > 1}
        classNames={slideIn}
        timeout={250}
        mountOnEnter
        unmountOnExit
      >
        <input
          type="text"
          onChange={inputChangeHandler}
          className={styles.input}
          placeholder="Enter needed name or number"
        />
      </CSSTransition>
    </>
  );
};

ContactsFilter.propTypes = {
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
  setQuery: PropTypes.func.isRequired,
};

export default ContactsFilter;
