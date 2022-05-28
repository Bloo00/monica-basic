
import React, { useEffect, useState, Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  link
} from 'react-router-dom';


// ===== routes =====
import Home from "./container/Home/home.jsx"


class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Routes>
            <Route exact path="/" element= {<Home/>} />
          </Routes>
        </div>
      </Router>

    );
  }
}


export default App;
