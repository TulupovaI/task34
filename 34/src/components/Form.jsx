import React, { useState } from "react";

function Form({ addContact, setCurrentPage }) {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function submitFormHandler(e) {
    e.preventDefault();

    const newContact = {
      username,
      name,
      phone,
    };

    addContact(newContact);
    console.log(newContact);

    setUsername("");
    setName("");
    setPhone("");
    setCurrentPage("contacts"); 
  }

  return (
    <div className="wrapper">
      <form className="new-user">
        <label htmlFor="username">Введіть своє прізвище:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="name">Введіть своє ім'я:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="phone">Введіть номер телефону:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <div className="buttons">
          <button className="btn-form" type="submit" onClick={submitFormHandler}>
            Зберегти
          </button>

          <button className="btn-form" type="button" onClick={() => setCurrentPage("contacts")}>
            Скасувати
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
