import React, { useState } from "react";
import Card from "./Card";
import styles from "./AddUser.module.css";
import Button from "./Button";

const AddUser = (props) => {
  // step 8 useState
  const [enteredUsername, setUsername] = useState("");
  // step 10
  const [enteredAge, setAge] = useState("");

  // step 2
  const addUserHandler = (event) => {
    event.preventDefault();

    //step 13 adding validations
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    //step 14 check age and adding + to string enteredAge
    if (+enteredAge < 1) {
      return;
    }

    //step 25 pass prop as a function
    props.onAddUser(enteredUsername, enteredAge);

    // console.log(enteredUsername, enteredAge);
    //step 12 reset states reflect in input as value={enteredUser}
    setUsername("");
    setAge("");
  };

  // step 9 add usernameHandler function event listener
  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  // step 11 add ageHandler function event listener
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    //   step 4 change div for Card
    <Card className={styles.input}>
      {/* step 1 create AddUser.js and return this form without props only tags */}
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        {/* step 7 change button for Button component */}
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
