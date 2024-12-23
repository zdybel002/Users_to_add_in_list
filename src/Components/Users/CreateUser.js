import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import styles from "./CreateUser.module.css";

const CreateUser = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [error, setError] = useState();

  const createUserHandler = (event) => {
    event.preventDefault();

    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "Złe wprowadzenie danych",
        message: "To pole nie moze być pustym",
      });
      return;
    }

    if (+inputAge < 1) {
      setError({
        title: "Złe wprowadzenie danych",
        message: "Wiek powiniem być większy od 0",
      });
      return;
    }

    props.onCreateUser(inputName, inputAge);

    setInputName("");
    setInputAge("");
  };

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onCloseModal={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={createUserHandler}>
          <label htmlFor="name">Imię</label>

          <input
            id="name"
            type="text"
            onChange={nameChangeHandler}
            value={inputName}
          ></input>

          <label htmlFor="age">Wiek</label>

          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={inputAge}
          ></input>

          <Button type="submit">Dodaj uzytkownika</Button>
        </form>
      </Card>
    </div>
  );
};

export default CreateUser;
