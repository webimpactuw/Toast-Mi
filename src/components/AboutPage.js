import React from 'react';
import "../AboutPage.css";


// always pull, edit, commit, pull again, and then push
export default function AboutPage(props) {
    return (
        <div class="parent">

            <div class="sloganSection">
                <div className="shapes">
                    <div className="greenRectangle">
                        <h3 id="slogan">slogan/ funfact</h3>
                        <p id="sloganText">hi hello hi hello hi hello hello hi hello hi hello hi hello hi hello hi hello hi</p>
                    </div>
                    <img
                        src="./pics/girl.png"
                        alt="girl"
                        className="bobaPic"
                    />
                </div>
            </div>

            <div id="spacer"></div>

            <div className="familyHistory">
                <div class="contents">
                    <div id="greenBlock"></div>
                    <div id="people">
                        <img
                            src="./pics/2people.png"
                            alt="2people"
                            className="people"
                        />
                    </div>
                    <div id="familyHistory">
                        <div className="greenRect">
                            <h3>family history</h3>
                            <p>hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello</p>
                        </div>
                    </div>
                    <div id="favoriteItems">
                        <h3>popular items</h3>
                        <div className="row">
                            <div className="col" id="drink">
                                <img
                                    src="./pics/drink.png"
                                    className="drink"
                                />
                            </div>
                            <div className="col">
                                <img 
                                    src="./pics/bowl.png"
                                    className="bowl"
                                />
                            </div>
                            <div className="col">
                                <img
                                    src="./pics/sandwich.png"
                                    className="sandwich"
                                />
                            </div>
                        </div>
                        <h4>link to order...</h4>
                    </div>
                    <div id="lastSection">
                        <img
                            src="./pics/actionShot.png"
                            className="actionShot"
                        />
                        <img
                            src="./pics/bottomEgg.png"
                            className="bottomEgg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}