import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Contacts from "./components/Contacts";
import "./App.css";
import "./components/Form.css";

function App() {
  const [currentPage, setCurrentPage] = useState("contacts");
  const [listContact, setListContact] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setListContact(data))
      .catch((error) => console.error("Помилка:", error));
  }, []);

  const handleDeleteContact = (id) => {
    const updatedContacts = listContact.filter((contact) => contact.id !== id);
    setListContact(updatedContacts);
  };
  

  const addContact = (newContact) => {
    console.log("Додано новий контакт:", newContact);
    setListContact((contacts) => [...contacts, newContact]);
  };

  return (
    <div>
      <ul className="navigation">
        <li className="nav1">
          <button className="btn-nav" onClick={() => setCurrentPage("form")}>Form</button>
        </li>
        <li className="nav1">
          <button className="btn-nav" onClick={() => setCurrentPage("contacts")}>Contacts</button>
        </li>
      </ul>
      {currentPage === "form" ? (
        <Form addContact={addContact} setCurrentPage={setCurrentPage} />
      ) : (
        <Contacts contacts1={listContact} handleDeleteContact={handleDeleteContact} />
      )}
    </div>
  );
}

export default App;
