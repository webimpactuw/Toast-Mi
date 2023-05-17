import React from 'react';
import "../AboutPage.css";


// always pull, edit, commit, pull again, and then push
export default function AboutPage(props) {
    return (
        <div class="parent">
            {/* <div className="drinkShadow"></div>
            <div className="leftCircle"></div>
            <div className="middleCircle"></div>
            <div className="rightCircle"></div>
            <p className="popularItems">popular items</p>
            <p className="sloganDescription">hi hello hi hello hi hello hello hi hello hi hello hi hello hi hello hi hello hi</p>
            <p className="familyHistoryDescription">hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello hi hello</p>
            <img
                src="./pics/tomato.png"
                alt="tomato"
                className="tomato"
            />
            <img
                src="./pics/greenEllipse5.png"
                alt="greenEllipse"
                className="greenEllipse"
            />
            <p className="familyHistory">Family History</p>
            <div className="greenRectangle"></div>
            <img 
                src="./pics/2people.png"
                alt="2people"
                className="people"
            />
            <div className="greenBackground"></div>
            <div className="smallGreenCircle"></div>
            <div className="smallOrangeCircle"></div>
            <div className="lowBlueCircle"></div>
            <p className="y">y</p>
            <p className="u">u</p>
            <p className="m">m</p>
            <p className="y2">y</p>
            <p className="u2">u</p>
            <p className="m2">m</p>
            <div className="bigOrangeCircle"></div>
            <div className="orangeCircle"></div>
            <img 
                src="./pics/egg.png"
                alt="egg"
                className="egg"
            />
            <img 
                src="./pics/girl.png" 
                alt="girl"
                className="girl"
            />
            <div className="ellipse"></div>
            <p className="slogan">slogan/ fun fact</p> */}
            {/* <div id = "slogan">
                <div id="greenRectangle">
                    <p>slogan</p>
                </div>
            </div> */}

            <div class="sloganSection">
                <div class="shapes">
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
                        {/* <div id="leftCircle">
                            <img
                                src="./pics/drink.png"
                                className="drink"
                            />
                        </div>
                        <div id="middleCircle">
                            <img 
                                src="./pics/bowl.png"
                                className="bowl"
                            />
                        </div>
                        <div id="rightCircle">
                            <img
                                src="./pics/sandwich.png"
                                className="sandwich"
                            />
                        </div> */}
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