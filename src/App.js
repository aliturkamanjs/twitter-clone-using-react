import React from "react";
import "./app.css";
import Main from "./components/main/main";
import NavBar from "./components/navBar/navbar";
import Right from "./components/right/right";

const App = () => {
  return (
    <div id="flex">
      <div id="container">
        <NavBar />
        <Main />
        <Right />
      </div>
    </div>
  );
};

export default App;
