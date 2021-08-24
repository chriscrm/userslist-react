import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  //step 22 create state for manage usersList
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, userage) => {
    //step 24 passing data to setUsersList using spread operator, and adding new values
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: username, age: userage, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      {/* step 23 add prop to AddUser Component like onAddUser={} to pass a function*/}
      <AddUser onAddUser={addUserHandler} />
      {/* step 21 */}
      <UserList users={usersList} />
    </div>
  );
}

export default App;
