import React, { Component } from "react";
import "./index.css";

import Navbar from "../NavBar";
import Youtube from "./youtube";
import Twitch from "./twitch";

export default class Home extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
            <Navbar/>
            <div className="meat">
                <div className="upper">
                    <div className="youtube"></div>
                    <div className="about">
                        <div className="aboutTitle"></div>
                        <div className="summary"></div>
                        <div className="youtubeLink"></div>
                    </div>
                </div>
                <div className="lower"></div>

            </div>
            </>
        )
    }
}

