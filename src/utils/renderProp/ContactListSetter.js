import { useState } from "react";

const ContactListSetter = ({ children }) => {
  const [contactList, setContactList] = useState([]);
  const [query, setQuery] = useState("");
  return children({
    contactList,
    setContactList,
    query,
    setQuery,
  });
};

export default ContactListSetter;
