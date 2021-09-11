import React from "react";
import "./app.css";
import Main from "./components/main/main";
import NavBar from "./components/navBar/navbar";
import Right from "./components/right/right";

const App = () => {
  return (

      <div id="container">
        <div id="nav-box">
          <NavBar />
        </div>
        <Main />


        <Right />

      </div>

  );
};

export default App;
