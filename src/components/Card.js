// step 3
import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  // step 5 change className for ``
  //   return <div className={styles.card}>{props.children}</div>;
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
