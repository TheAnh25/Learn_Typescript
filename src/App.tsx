import React from "react";
import "./App.css";
import { Hello } from "./components/Hello";
import { Person } from "./components/person";
import { PersonList } from "./components/personList";
import { NumberList } from "./components/numberList";
import { Login } from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Caculator } from "./components/caculator";
import { ChildrenProps } from "./components/childrenProps";
import { Firestore } from "./components/firestore";

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
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={<Hello name="Thế Anh IT" age={22} isLogin={true} />}
            />
            <Route path="login" element={<Login />} />
            <Route path="person" element={<Person name={personName} />} />
            <Route path="firestore" element={<Firestore />} />
            <Route
              path="childrenProps"
              element={
                <ChildrenProps>
                  <div>Props Children</div>
                </ChildrenProps>
              }
            />
            <Route
              path="personList"
              element={<PersonList names={PersonNameList} />}
            />
            <Route path="numberList" element={<NumberList />} />
            <Route path="caculator" element={<Caculator />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
