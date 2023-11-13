import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import LandingPg from "./Components/LandingPg/LandingPg";
import Calculator from "./Components/Calculator/Calculator";
import Slider from "./Components/Slider/Slider";



class App extends Component {
  render() {
    return (
        <div className="App">
          <h1 className="title">
            Wireframes
          </h1>
          <div className="slideShowBox">
            <button></button>
            <div className="slideShow">
              
            </div>
            <button></button>
          </div>
      {/* <Router>
          <Routes>
            <Route />
            <Route exact path="/" element={<Calculator />} />
          </Routes>
      </Router> */}
        </div>
    );
  }
}

export default App;
