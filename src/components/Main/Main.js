import React, { useState, useEffect } from "react";
import { printAllPaths, getPath } from "../Constants/Path";

import styles from "./Main.module.css";

const Reach = (props) => {
  // states for individual dropdown
  const [node1, setNode1] = useState("Person1");
  const [node2, setNode2] = useState("Person2");

  //display the degree of connection
  const [status, setStatus] = useState(false);

  //state to manage paths from ./Constants/Path
  const [path, setPath] = useState({});

  const handleSubmit = (event) => {
    //such that browser does not refreshes
    event.preventDefault();

    //show status
    setStatus(true);

    //invoke the function to check the number of paths btw two people
    printAllPaths(node1, node2);

    //get the number of paths btw two people and set it to path state
    setPath(getPath());
  };

  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <select
          value={node1}
          onChange={(e) => setNode1(e.target.value)}
          className={styles.dropdown}
        >
          <option value="select">select</option>
          {props.onListPeople.map((name, i) => (
            <option key={i} value={name}>
              {name}
            </option>
          ))}
        </select>
        <select
          value={node2}
          onChange={(e) => setNode2(e.target.value)}
          className={styles.dropdown}
        >
          <option value="select">select</option>
          {props.onListPeople.map((name, i) => (
            <option key={i} value={name}>
              {name}
            </option>
          ))}
        </select>
        <input type="submit" value="Submit" className={styles.btn} />
      </form>

      {status && (
        <span className={styles.status}>
          {node1} can connect with {node2} via {Object.keys(path).length}{" "}
          channels.
        </span>
      )}

      {Object.values(path).map((name, i) => (
        <div key={i} className={styles.progressContainer}>
          <div key={i} className={styles.progress}></div>
          {name.map((val, j) => (
            <div key={`${i}${j}`} className={styles.circle}>
              {val}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Reach;
