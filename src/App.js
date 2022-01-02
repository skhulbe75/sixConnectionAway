import React, { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

import styles from "./App.module.css";

function App() {
  const [people, setPeople] = useState([]);

  //lifting the state up from child
  // not using setPeople([...oldPeople, newPeople]) as newPeople is pre-checked array
  // and pushing it to this state will duplicate items
  const addPeople = (newPeople) => {
    setPeople(newPeople);
  };

  return (
    <React.Fragment>
      <Header onAddPeople={addPeople} />
      <main className={styles.main}>
        <Main onListPeople={people} />
        <Sidebar onShowPeople={people} />
      </main>
    </React.Fragment>
  );
}

export default App;
