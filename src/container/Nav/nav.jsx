import React, { Component } from "react";

import "../Style/nav.css"

export default class Nav extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="nav-container">
                    <div className="burger-container">
                        <button className="burger-button">
                            <div className="line-1"></div>
                            <div className="line-2"></div>
                            <div className="line-2"></div>
                        </button>
                    </div>

                    <div className="logo"><img src="#" alt="monicas logo" /></div>

                    <div className="group-conainer">
                        <div className="shop-container">
                            <button className="shop-button">
                                <div className="shop-style"></div>
                            </button>
                        </div>

                        <div className="contact-container">
                            <button className="contact-button">
                                <div className="top"></div>
                                <div className="bottom"></div>
                            </button>
                        </div>
                    </div>

                </div>

                <hr/>
            </>
        )
    }
}

