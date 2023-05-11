import React from "react";
import styles from "./HomePage.css";

export default function HomePage(props) {

    return (
        <div>  
            <div class="header">
                <div class="header-text-container">
                    <h1 class="header-text">more than</h1>
                </div>
            </div>

            <div class="box">
                <div className="row" id="row">
                    <h1 class="slogan-text">just bahn mi.</h1>
                </div>
                <div className="row" id="row">
                    <div className="col">
                        <div id="textBox">
                            <h2 class="welcome-text">Welcome to Toast Mi</h2>
                            <p class="paragraph-text">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                            <a href="./About"><button class="about-us-button">About us</button></a>
                        </div>
                    </div>
                    <div className="col">
                        <div id="picBox">
                            <img src="./pics/about-us-background.png"/>
                            <img src="./pics/about-us-pic.png" id="main"/>
                        </div>
                    </div>
                </div>

                <div className="row" id="row">
                    <h1 class="menu-text">Find Something for you!</h1>
                    <div className="col" id='food-pics'>
                        <img src="./pics/homepage-drinks.png" id="drink"/>
                    </div>
                    <div className="col" id='food-pics'>
                        <img src="./pics/homepage-bahn-mi.png" id="bahn-mi"/>
                    </div>
                    <div className="col" id='food-pics'>
                        <img src="./pics/homepage-plate.png" id="plate"/>
                    </div>
                </div>

                <div className="row" id="row">
                <a href="./Menu"><button class="menu-button">Check out our full menu!</button></a>
                </div>

                <div className="row" id="row">
                    <h1 class="socials-text">Keep Up With Us!</h1>
                    <a href="https://instagram.com/toastmiplease"><h2 class="instagram-text">@toastmiplease</h2></a>
                </div>

                <div className="row" id="row">
                    <div class="gallery">
                        <div id="pic1"></div>
                        <div id="pic2"></div>
                        <div id="pic3"></div>
                        <div id="pic4"></div>
                    </div>
                </div>

                <div className="row">
                    <h2 class="location-text">Find us at our two locations:</h2>
                </div>

                <div className="row" id="row">
                    <div class="location-container">
                        <div className="col">
                            <img src="./pics/greenlake.png" id="location-left"/>
                        </div>
                        <div className="col">
                            <img src="./pics/tacoma.png" id="location-right"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
