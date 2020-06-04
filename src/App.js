import React from "react";
import ContactListSetter from "./utils/renderProp/ContactListSetter";
import Storage from "./utils/renderProp/Storage";
import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";
import ContactList from "./components/ContactList/ContactList";
import ContactsFilter from "./components/ContactsFilter/ContactsFilter";

function App() {
  return (
    <>
      <Header />
      <Storage>
        {({ saveToStorage, getFromStorage }) => (
          <ContactListSetter>
            {({
              contactList,
              setContactList,
              filteredList,
              setFilteredList,
              query,
              setQuery,
            }) => (
              <>
                <InputForm
                  contactList={contactList}
                  setContactList={setContactList}
                  saveToStorage={saveToStorage}
                />
                <ContactsFilter
                  contactList={contactList}
                  setFilteredList={setFilteredList}
                  setQuery={setQuery}
                />
                <ContactList
                  contactList={contactList}
                  setContactList={setContactList}
                  saveToStorage={saveToStorage}
                  getFromStorage={getFromStorage}
                  filteredList={filteredList}
                  query={query}
                />
              </>
            )}
          </ContactListSetter>
        )}
      </Storage>
    </>
  );
}

export default App;
