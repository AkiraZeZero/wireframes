import React, { Component } from "react";
import {BrowserRouter as Router, Routes, Route, Navigate, Link} from "react-router-dom";
import LandingPg from "./Components/LandingPg/LandingPg";
import Calculator from "./Components/Calculator/Calculator";
// import Contact from './component/contact';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          Home Pg
          <Routes>
            <Route exact path="/" element={<LandingPg />} />
            <Route exact path="/calculator" element={<Calculator />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
