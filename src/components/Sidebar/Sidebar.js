import React from "react";

import styles from "./Sidebar.module.css";
const Sidebar = (props) => {
  return (
    <div className={styles.sidebar}>
      <h3>Friends in your world</h3>
      <ol>
        {props.onShowPeople.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ol>
    </div>
  );
};

export default Sidebar;
