import React, { Component } from "react";
import "./index.css";


export default class Twitch extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
            <div className="videos">
                <div className="twitchTitle">TWITCH</div>
                <hr className="solid" />
                {/* should map the last 12 */}
                <div className="video1">1</div>
                <div className="video2">2</div>
                <div className="video3">3</div>
                <div className="video4">4</div>
                <div className="video5">5</div>
                <div className="video6">6</div>
                <div className="video7">7</div>
                <div className="video8">8</div>
                <div className="video9">9</div>
                <div className="video10">10</div>
                <div className="video11">11</div>
                <div className="video12">12</div>
            </div>
            </>
        )
    }
}
