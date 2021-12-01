import "./App.css";
import React, { Component } from "react";
import InformationCard from "./component/InformationCard";
import Registration from "./component/Registration";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav></nav>
          <Routes>
            <Route path="/registration">{<Registration />}</Route>
            {/* <Route path="/homePage">{<HomePage />}</Route> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
