import React, { Component } from "react";
import "./index.css";

import Navbar from "../NavBar";

class Home extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
            <Navbar/>
            <div className="meat">
                {/* i want embeded videos here */}
                <h1>you are home rn</h1>
            </div>
            </>
        )
    }
}

export default Home;