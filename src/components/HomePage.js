import React, { useEffect, useState } from 'react';
import styles from "./HomePage.css";
import sanityClient from '../client'
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}
export default function HomePage(props) {
    const [homeInfo, setHomeInfo] = useState({
        homeInfo: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
        aboutPic: { asset: { _ref: 'image-ce2652ebcdb1fee0e2ad6465dddb8db94621f34c-519x354-png' } },
        image1: { asset: { _ref: 'image-ce2652ebcdb1fee0e2ad6465dddb8db94621f34c-519x354-png' } },
        image2: { asset: { _ref: 'image-ec1ea22308dc3425c1e5b4dc6d5f46efb7253725-519x354-png' } },
        drinks: { asset: { _ref: 'image-51a772fa56a5956cdd2969fbb5961a7447a8f074-431x249-png' } },
        bahnmi: { asset: { _ref: 'image-51a772fa56a5956cdd2969fbb5961a7447a8f074-431x249-png' } },
        plate: { asset: { _ref: 'image-51a772fa56a5956cdd2969fbb5961a7447a8f074-431x249-png' } }
    });
    useEffect(() => {
        sanityClient.fetch('*[_type == "home"]').then((data) => {
            setHomeInfo(data[0])
            console.log(data[0])
            console.log(urlFor('image-51a772fa56a5956cdd2969fbb5961a7447a8f074-431x249-png'))
        }).catch(error => console.log(error))

    }, []);
    return (
        <div>
            <div className="row header pb-0">
                <div className="d-flex justify-content-start header-text">more than</div>
            </div>

            <div class="box">
                <div className="row" id="row">
                    <h1 class="slogan-text">just bahn mi.</h1>
                </div>
                <div className="row" id="row">
                    <div className="col">
                        <div id="textBox">
                            <h2 class="welcome-text">Welcome to Toast Mi</h2>
                            <p class="paragraph-text">{homeInfo.homeInfo}</p>
                            <a href="#/about"><button class="about-us-button">About us</button></a>
                        </div>
                    </div>
                    <div className="col">
                        <div id="picBox">
                            <img src={urlFor(homeInfo.aboutPic.asset._ref)} />
                        </div>
                    </div>
                </div>

                <div className="row" id="row">
                    <h1 class="menu-text">Find Something for you!</h1>
                    <div className="col" id='food-pics'>
                        <img src={urlFor(homeInfo.drinks.asset._ref)} id="drink" />
                    </div>
                    <div className="col" id='food-pics'>
                        <img src={urlFor(homeInfo.bahnmi.asset._ref)} id="bahn-mi" />
                    </div>
                    <div className="col" id='food-pics'>
                        <img src={urlFor(homeInfo.plate.asset._ref)} id="plate" />
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
                            <img src={urlFor(homeInfo.image1.asset._ref)} id="location-left" />
                        </div>
                        <div className="col">
                            <img src={urlFor(homeInfo.image2.asset._ref)} id="location-right" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
