import { useState } from "react";

const ContactListSetter = ({ children }) => {
  const [contactList, setContactList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [query, setQuery] = useState("");
  return children({
    contactList,
    setContactList,
    filteredList,
    setFilteredList,
    query,
    setQuery,
  });
};

export default ContactListSetter;
