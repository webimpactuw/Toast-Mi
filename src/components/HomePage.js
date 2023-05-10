import React from "react";
import styles from "./HomePage.css";

export default function HomePage(props) {

    return (
        <div>  
            <div class="header">
                <div id="temp">
                    <h1 class="header-text">more than</h1>
                </div>
                
            </div>

            <div class="box">
                <div className="row" id="row">
                    <h1 class="slogan-text">just bahn mi.</h1>
                </div>
                <div className="row" id="row">
                    <div className="col">
                        <div id="firstBox">
                            <h2 class="welcome-text">Welcome to Toast Mi</h2>
                            <p class="paragraph-text">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                            <a href="./About"><button class="about-us-button">About us</button></a>
                        </div>
                    </div>
                    <div className="col">
                        <div id="secondBox">
                            <img src="./pics/about-us-background.png"/>
                            <img src="./pics/about-us-pic.png" id="main"/>
                        </div>
                    </div>
                </div>

                <div className="row" id="row">
                    <h1 class="menu-text">Find Something for you!</h1>
                    <div className="col">
                        <img src="./pics/homepage-drinks.png" id="drink"/>
                    </div>
                    <div className="col">
                        <img src="./pics/homepage-bahn-mi.png"/>
                    </div>
                    <div className="col" id="menu">
                        <img src="./pics/homepage-plate.png" id="plate"/>
                    </div>
                </div>

                <div className="row" id="row">
                <a href="./Menu"><button class="menu-button">Check out our full menu!</button></a>
                </div>

                <div className="row" id="row">
                    <h1 class="socials-text">Keep Up With Us!</h1>
                    <h2 class="instagram-text">@toastmiplease</h2>
                </div>
            </div>
        </div>
    )
}
