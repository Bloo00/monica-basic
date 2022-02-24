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
                    <div className="youtube">
                    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/9U8pVtP3cos?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="about">
                        <div className="aboutTitle">Conveyors Everywhere!</div>
                        <div className="summary">

                        </div>
                        <div className="youtubeLink">No desc cause MONICA IS UN CREATIVE!!!!!{`>`}:0</div>
                    </div>
                </div>
                <br/>

                <div className="lower">
                    <Youtube/>
                </div>
            </div>
            </>
        )
    }
}

