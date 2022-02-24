import React, { Component } from "react";
import "./index.css";

import Navbar from "../NavBar";

export default class Socials extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
            {/* <Navbar/>
            <div className="container">
                <div className="BlogTitle">
                    <img src="https://cdn.wlo.link/profiles/icons/0c7e1bcc-62f8-438c-8f5e-395b14592906" alt="miss monica logo" />
                    <h2>@MissMonica</h2>
                </div>
                <div className="meat">
                    <a href="https://wlo.link/@MissMonica" className="support">Support me</a>
                    <a href="" className="twitch button">Twitch</a>
                    <a href="" className="youtube">Youtube</a>
                    <a href="" className="discord">Discord</a>
                    <a href="" className="tiktok">TikTok</a>
                    <a href="" className="novaInsta">Nova's Instagram</a>
                    <a href="" className="wishlist">Amazon Wishlist</a>
                </div>
            </div> */}
            </>
        )
    }
}
