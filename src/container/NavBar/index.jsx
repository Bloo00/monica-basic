

import React, { Component } from "react";
import "./index.css";

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="Navbar">
                    <div className="Logo"></div>
                    <div className="routes">
                        <a href="" className="home">Home</a>
                        <a href="" className="blog">Blog</a>
                        <a href="" className="calender">Calander</a>
                        <a href="" className="socials">Socials</a>
                        <a href="" className="shop">Shop</a>
                    </div>
                </div>
            </>
        )
    }
}

export default Navbar;