import React, { useEffect, useState } from 'react';
import "../AboutPage.css";

import sanityClient from '../client'
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}
// always pull, edit, commit, pull again, and then push
export default function AboutPage(props) {
    const [aboutInfo, setAboutInfo] = useState({
        slogan: 'hello', familyHistory: 'history', image1: {
            asset: { _ref: 'image-ef131cde264a7247eb0f4aafacbdb08bcfd1951e-680x783-png' }
        }, image2: {
            asset: { _ref: 'image-646eaa57489f21ae14255717ae5632aef89ced81-124x82-png' }
        }, item1: {
            asset: { _ref: 'image-646eaa57489f21ae14255717ae5632aef89ced81-124x82-png' }
        }, item2: {
            asset: { _ref: 'image-646eaa57489f21ae14255717ae5632aef89ced81-124x82-png' }
        }, item3: {
            asset: { _ref: 'image-646eaa57489f21ae14255717ae5632aef89ced81-124x82-png' }
        },
        action: {
            asset: { _ref: 'image-f3194c3e4f2d710443f99167c76250af561484df-1512x867-png' }
        },
        egg: {
            asset: { _ref: 'image-8866b9a786db3d6ff995131667123017ee398f0c-164x161-png' }
        }
    });
    useEffect(() => {
        sanityClient.fetch('*[_type == "about"]').then((data) => {
            setAboutInfo(data[0])
            console.log(aboutInfo)
        })

    }, []);
    return (
        <div class="parent">

            <div class="sloganSection">
                <div className="shapes">
                    <div className="greenRectangle">
                        <h3 id="slogan">slogan/ funfact</h3>
                        <p id="sloganText">{aboutInfo.slogan}</p>
                    </div>
                    <img
                        // src="./pics/girl.png"
                        src={urlFor(aboutInfo.image1)}
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
                            src={urlFor(aboutInfo.image2)}
                            alt="2people"
                            className="people"
                        />
                    </div>
                    <div id="familyHistory">
                        <div className="greenRect">
                            <h3>family history</h3>
                            <p className='text-center'>{aboutInfo.familyHistory} </p> </div>
                    </div>
                    <div id="favoriteItems">
                        <h3>popular items</h3>
                        <div className="row">
                            <div className="col" id="drink">
                                <img
                                    // src="./pics/drink.png"
                                    src={urlFor(aboutInfo.item1)}
                                    className="drink"
                                />
                            </div>
                            <div className="col">
                                <img
                                    // src="./pics/bowl.png"
                                    src={urlFor(aboutInfo.item2)}
                                    className="bowl"
                                />
                            </div>
                            <div className="col">
                                <img
                                    // src="./pics/sandwich.png"
                                    src={urlFor(aboutInfo.item3)}
                                    className="sandwich"
                                />
                            </div>
                        </div>
                        <h4><a href="order">link to order...</a></h4>
                    </div>
                    <div id="lastSection">
                        <img
                            src={urlFor(aboutInfo.action.asset._ref)}
                            className="actionShot"
                        />
                        <img
                            src={urlFor(aboutInfo.egg.asset._ref)}
                            className="bottomEgg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}