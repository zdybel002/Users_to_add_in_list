import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import styles from "./CreateUser.module.css";

const CreateUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const createUserHandler = (event) => {
    event.preventDefault();
    const inputUserName = nameInputRef.current.value;
    const inputUserAge = ageInputRef.current.value;
    if (inputUserName.trim().length === 0 || inputUserAge.trim().length === 0) {
      setError({
        title: "Złe wprowadzenie danych",
        message: "To pole nie moze być pustym",
      });
      return;
    }

    if (+inputUserAge < 1) {
      setError({
        title: "Złe wprowadzenie danych",
        message: "Wiek powiniem być większy od 0",
      });
      return;
    }

    props.onCreateUser(inputUserName, inputUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <React.Fragment>
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

          <input id="name" type="text" ref={nameInputRef}></input>

          <label htmlFor="age">Wiek</label>

          <input id="age" type="number" ref={ageInputRef}></input>

          <Button type="submit">Dodaj uzytkownika</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default CreateUser;
