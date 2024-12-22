import React, { useState } from "react";

import FormCom from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";

let userTable = [{ name: "Roman Zdybel", age: "20" }];

function App() {
  const [allUsers, setAllUsers] = useState(userTable);
  const onAddUserHandler = (user) => {
    setAllUsers((prewUsers) => {
      console.log([user, ...prewUsers]);
      return [user, ...prewUsers];
    });
  };
  return (
    <div>
      <FormCom onAddUser={onAddUserHandler}></FormCom>
      <Users users={allUsers}></Users>
    </div>
  );
}

export default App;
