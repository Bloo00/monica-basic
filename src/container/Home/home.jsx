import React, { Component } from "react";
import "./home.css";


export default class Home extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
                <div className="container">
                {/* nav should be here */}
                <div className="header">
                    <div className="header-words">
                        <div className="header-subtitle">Classic Monica meets your Eyebols~</div>
                        <div className="header-title">Miss Monica</div>
                    </div>
                    <div className="header-image">
                        <img className="header-main-image" src="#" alt="pic of miss monica"/>
                        <img className="header-image" src="#" alt="pic of nova"/>
                    </div>
                </div>
                <div className="meat">
                    <div className="game-1">
                        <div className="game-1-subtitle">What you all wanna seee!</div>
                        <div className="game-1-title">Plate up!</div>
                        <button className="game-1-button" link="#">click to watch more</button>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-title">Follow Miss Monica Everywhere!</div>
                    <div className="footer-links">
                        <ul>
                            <li><a href="#">Twitch</a></li>
                            <li><a href="#">Youtube</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Discord</a></li>
                            <li><a href="#">Insta</a></li>
                            <li><a href="#">Shop</a></li>
                        </ul>
                    </div>
                    <div className="bloos-stuff">Bloo was here</div>
                    </div>
                </div>
            </>
        )
    }
}

