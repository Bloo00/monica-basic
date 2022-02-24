

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
                        <a href="/" className="home">Home</a>
                        <a href="/blog" className="blog">Blog</a>
                        <a href="/calender" className="calender">Calander</a>
                        <a href="https://wlo.link/@MissMonica" className="socials">Socials</a>
                        <a href="https://missmonica.creator-spring.com/" className="shop">Shop</a>
                    </div>
                </div>
            </>
        )
    }
}

export default Navbar;