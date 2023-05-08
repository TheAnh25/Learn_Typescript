import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Hello } from "./components/Hello";
import { Person } from "./components/person";
import { PersonList } from "./components/personList";

function App() {
  const personName = {
    first: "Anh",
    last: "Thế",
  };

  const PersonNameList = [
    {
      first: "Anh 1",
      last: "Thế",
    },
    {
      first: "Anh 2",
      last: "Thế",
    },
    {
      first: "Anh 3",
      last: "Thế",
    },
  ];
  return (
    <div className="App">
      <Hello name="Thế Anh IT" age={22} isLogin={false} />
      <Person name={personName} />
      <PersonList names={PersonNameList} />
    </div>
  );
}

export default App;
