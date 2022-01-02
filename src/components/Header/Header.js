import React, { useState, useEffect, useRef } from "react";
import Input from "../UIComponents/Input";
import Button from "../UIComponents/Button";

import { addNode, addEdge, getVertex } from "../Constants/Path";

import styles from "./Header.module.css";

const Header = (props) => {
  //these ref values captures data from the input
  const firstFriend = useRef();
  const secondFriend = useRef();

  //a list to keep all the people, this state object is lifted up and passed to parent
  const [vertex, setVertex] = useState([]);

  //this useEffect hook is used as a side effect as useState hook is an ascynchronus function and states cannot be lifted
  //immediately as chnages are made to it.
  useEffect(() => {
    //send added people to the parent app component
    props.onAddPeople(vertex);
  }, [vertex]);

  const handleClickEvent = () => {
    /* Capture data and send it to ./Constants/Path.js */

    // capture data from both the inputs
    const node1 = firstFriend.current.inputValue;
    const node2 = secondFriend.current.inputValue;

    // Add inputed value to the vertex, the function called is in ./Constants/Path.js
    addNode(node1);
    addNode(node2);

    //add edges to vertex, the function called is in ./Constants/Path.js
    addEdge(node1, node2);

    // retrieve the data from ./Constants/Path.js
    const list = getVertex();
    setVertex(list);

    //clear the input field
    firstFriend.current.clearInputVal();
    secondFriend.current.clearInputVal();
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.title}>
        <span className={styles.six}>6</span>
        <span className={styles.connections}>CONNECTIONS</span>
        <span className={styles.away}>AWAY</span>
      </div>
      <Input ref={firstFriend} />
      <span className={styles.relationship}> is a friend of </span>
      <Input ref={secondFriend} />

      <Button onClick={handleClickEvent} value={"Add"} />
    </nav>
  );
};

export default Header;
