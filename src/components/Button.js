import React from "react";
import styles from "./Button.module.css";

// step 6 and adding default type button and style attached Button.module.css
const Button = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
