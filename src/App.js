import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserCard from "./components/UserCard.jsx";
import Stepper from "./components/Stepper.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-title">
          <b>Generate Random User</b>
        </p>
        <p className="App-subtitle">Click a box to generate a random user</p>
      </header>
      <div>
        <Stepper />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </div>
  );
}

export default App;
