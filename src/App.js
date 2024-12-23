import React, { useState } from "react";

import CreateUser from "./Components/Users/CreateUser";
import UserList from "./Components/Users/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);

  const createUserHandler = (name, age) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: name, age: age }];
    });
  };
  return (
    <div>
      <CreateUser onCreateUser={createUserHandler}></CreateUser>
      <UserList users={userList} />
    </div>
  );
};

export default App;
