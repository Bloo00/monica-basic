import React, { Component } from "react";
import "./index.css";

import Navbar from "../NavBar";

class Socials extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
            <Navbar/>
            <div className="container">
                <div className="BlogTitle">
                    <h1>Socials</h1>
                    <h4>Monicas evil planns</h4>
                </div>
                <div className="meat">
                </div>
            </div>
            </>
        )
    }
}

export default Socials;