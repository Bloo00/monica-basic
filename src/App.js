
import React, { useEffect, useState, Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  link
} from 'react-router-dom';

import "./App.css"

// ===== routes =====
import Home from "./container/Home/index.jsx"

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Routes>
            <Route exact path="/" element= {<Home/>} />
            {/* <Route path="/shop" element= {<Shop/>} /> */}
            {/* <Route path="/blog" element= {<Blog/>} /> */}
            {/* <Route path="/calander" element= {<Calander/>} /> */}
            {/* <Route path="/socials" element= {<Socials/>} /> */}
            {/* <Route path="/404" element={<E404/>} /> */}
          </Routes>
        </div>
      </Router>

    );
  }
}


export default App;
