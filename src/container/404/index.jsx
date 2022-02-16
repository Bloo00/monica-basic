import React, { Component } from "react";
import "./index.css";

import Navbar from "../NavBar";

class E404 extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
            <Navbar/>
            <div className="404">
                <h1>Error 404 page not found</h1>
            </div>
            </>
        )
    }
}

export default E404;