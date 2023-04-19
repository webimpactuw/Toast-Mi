import React from 'react';
import "../AboutPage.css";


// always pull, edit, commit, pull again, and then push
export default function AboutPage(props) {
    return (
        <div class="parent">
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
            <div className="Rectangle"></div>
        </div>
    )
}