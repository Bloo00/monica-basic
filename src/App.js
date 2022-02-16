
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
import Blog from"./container/Blog/index.jsx"
import Calender from "./container/Calender"
import Socials from "./container/Socials";
import Shop from "./container/Shop"
import E404 from "./container/404"

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Routes>
            <Route exact path="/" element= {<Home/>} />
            <Route path="/shop" element= {<Shop/>} />
            <Route path="/blog" element= {<Blog/>} />
            <Route path="/calender" element= {<Calender/>} />
            <Route path="/socials" element= {<Socials/>} />
            <Route path="/404" element={<E404/>} />
          </Routes>
        </div>
      </Router>

    );
  }
}


export default App;
