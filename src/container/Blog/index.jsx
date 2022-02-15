import React, { Component } from "react";
import "./index.css";

import Navbar from "../NavBar";

class Blog extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
            <Navbar/>
            <div className="container">
                <div className="BlogTitle">
                    <h1>Blog</h1>
                    <h4>Bloo's latest news about miss monicas evil and nefarious deeds</h4>
                </div>

                <div className="meat">
                    
                </div>
            </div>
            </>
        )
    }
}

export default Blog;