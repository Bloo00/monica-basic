import React, { Component } from "react";
import "./index.css";

import Navbar from "../NavBar";

class Shop extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
            <Navbar/>
            <div className="container">
                <div className="BlogTitle">
                    <h1>Shop</h1>
                    <h4>Bloo's latest news about miss monetray exppoits</h4>
                </div>

                <div className="meat">
                    
                </div>
            </div>
            </>
        )
    }
}

export default Shop;