import React, { useState } from "react";

import styles from "./UserForm.module.css";

function FormCom(props) {
  //Stattes for value in inputs
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");

  //Handlers for inputs
  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };

  // Form handler
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const userData = {
      name: inputName,
      age: inputAge,
    };
    props.onAddUser(userData);
    setInputName("");
    setInputAge("");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <div className={styles.divInput}>
          <label className={styles.fromLabel}>Imię</label>
          <input
            type="text"
            className={styles.fromInput}
            onChange={nameChangeHandler}
            value={inputName}
          />
        </div>
        <div className={styles.divInput}>
          <label className={styles.fromLabel}>Wiek</label>
          <input
            type="number"
            className={styles.fromInput}
            onChange={ageChangeHandler}
            value={inputAge}
          />
        </div>
        <button className={styles.formBtm} type="submit">
          Dodaj uzytkownika
        </button>
      </form>
    </div>
  );
}

export default FormCom;
