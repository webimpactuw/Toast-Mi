import React, { useEffect, useState } from 'react';
import "../App.css";
import sanityClient from '../client'
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}
export default function OrderPage(props) {
    const [logo, setlogo] = useState(
        'image-45c8e6269aa3b3cd3f5e73ba8e04f470fc794c8c-266x146-png');
    useEffect(() => {
        sanityClient.fetch('*[_type == "logo"]').then((data) => {
            setlogo(data[0].logo.asset._ref)
        }).catch(error => console.log(error))

    }, []);
    const [orderInfo, setOrderInfo] = useState({
        cloverGL: "https://www.clover.com/online-ordering/toast-mi-seattle",
        cloverTC: "https://www.clover.com/online-ordering/toast-mi-tacoma",
        doordashGL: "https://www.doordash.com/store/toast-mi-seattle-23738193/",
        doordashTC: "https://www.doordash.com/store/toast-mi-tacoma-1633195/",
        email: "toastmigreenlake@gmail.com",
        facebook: "https://www.facebook.com/people/Toast-Mi/100063613930385/",
        grubhubGL: "https://www.grubhub.com/restaurant/toast-mi-green-lake-7130-woodlawn-avenue-northeast-seattle/5464192",
        grubhubTC: "https://www.grubhub.com/restaurant/toast-mi-tacoma-2602-n-proctor-st-suite-d-tacoma/5465640",
        instagram: "https://www.instagram.com/toastmiplease/",
        ubereatsGL: "https://www.ubereats.com/store/toast-mi-green-lake/fNTM_Y0TUa6gJ4q0fIasog",
        ubereatsTC: "https://www.ubereats.com/store/toast-mi/nin9YrxTST6q51KUT0l_5w",
        yelp: "https://www.yelp.com/biz/toast-mi-tacoma"
    });
    useEffect(() => {
        sanityClient.fetch('*[_type == "links"]').then((data) => {
            console.log(data[0])
            setOrderInfo(data[0])
        }).catch(error => console.log(error))
    }, [])
    return (

        <div>
            <div class="header">
                <h1>Order</h1>
                <p>Pickup and Delivery</p>
            </div>

            <div class="content">
                <p>----------- open daily from 11am to 6pm -----------</p>
            </div>

            <div class="greenBox">
                <div class="images">

                    <div className='row'>
                        <div className="col">
                            {/* <img src="pics/TacomaOrder.png"></img> */}
                            <div className="innerWhiteBox" id="order-firstBox">
                                <h3>Tacoma</h3>
                                <p>2602 N Proctor St Suite D <br /> Tacoma, WA 98407</p>
                                <p>(253)-245-2246</p>
                                {/* <br/> */}
                                <hr className="dottedLine"></hr>
                                <p> Order at:</p>
                                <hr className="dottedLine"></hr>

                                {/* Receipt Effect */}
                                <div className='row'>
                                    <div className='col'>
                                        <div className='websiteNames'>
                                            <p><a href={orderInfo.doordashTC}>Doordash</a></p>
                                            <p><a href={orderInfo.ubereatsTC}>Ubereats</a></p>
                                            <p><a href={orderInfo.grubhubTC}>Grubhub</a></p>
                                            <p><a href={orderInfo.cloverTC}>Clover</a></p>
                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className='prices'>
                                            {/* <p>0.00</p>
                                            <p>0.00</p>
                                            <p>0.00</p>
                                            <p>0.00</p> */}
                                        </div>
                                    </div>
                                </div>
                                <hr className="dottedLine"></hr>
                                <div className='row'>
                                    <div className='col'>
                                        <div className='websiteNames'>
                                            <p>Total:</p>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='deliciousness'>
                                            <p>Deliciousness!</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className="dottedLine"></hr>
                                {/* Receipt Effect */}

                                <p>Thank  you  for  visiting!</p>
                                {/* <a href='https://www.google.com/maps/place/Toast+Mi+Tacoma/@47.2713449,-122.4918014,17z/data=!3m2!4b1!5s0x549054ef2265017d:0x1cc5da800182baa4!4m6!3m5!1s0x5490555380efde05:0x9285e2e7a142ae!8m2!3d47.2713449!4d-122.4892265!16s%2Fg%2F11hf9slg_3' target='_blank'>
                                    <img src="pics/tacomaMap.png"></img>
                                </a> */}
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2707.1999933594566!2d-122.4892265!3d47.271344899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490555380efde05%3A0x9285e2e7a142ae!2sToast%20Mi%20Tacoma!5e0!3m2!1sen!2sus!4v1683159430837!5m2!1sen!2sus" width="400" height="300" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                <img src={urlFor(logo)} className='bottomLogo'></img>
                            </div>
                        </div>
                        <div className="col">
                            {/* <img src="pics/GreenlakeOrder.png" alt="GreenlakeOrder"></img> */}
                            <div className="innerWhiteBox" id="order-secondBox">
                                <h3>GreenLake</h3>
                                <p>7130 Woodlawn Ave NE <br /> Seattle, WA 98115</p>
                                <p>(206)-402-5546</p>
                                {/* <br/> */}
                                <hr className="dottedLine"></hr>
                                <p> Order at:</p>
                                <hr className="dottedLine"></hr>

                                {/* Receipt Effect */}
                                <div className='row'>
                                    <div className='col'>
                                        <div className='websiteNames'>
                                            <p><a href={orderInfo.doordashGL}>Doordash</a></p>
                                            <p><a href={orderInfo.ubereatsGL}>Ubereats</a></p>
                                            <p><a href={orderInfo.grubhubGL}>Grubhub</a></p>
                                            <p><a href={orderInfo.cloverGL}>Clover</a></p>
                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className='prices'>
                                            {/* <p>0.00</p>
                                            <p>0.00</p>
                                            <p>0.00</p>
                                            <p>0.00</p> */}
                                        </div>
                                    </div>
                                </div>
                                <hr className="dottedLine"></hr>


                                <div className='row'>
                                    <div className='col'>
                                        <div className='websiteNames'>
                                            <p>Total:</p>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div className='deliciousness'>
                                            <p>Deliciousness!</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className="dottedLine"></hr>
                                {/* Receipt Effect */}

                                <p>Thank  you  for  visiting!</p>
                                {/* <a href='https://www.google.com/maps/place/Toast+Mi+Green+Lake/@47.6802528,-122.3270411,17z/data=!3m1!4b1!4m6!3m5!1s0x549015db737bb9c7:0x88904a12f4e8e731!8m2!3d47.6802528!4d-122.3244662!16s%2Fg%2F11t5q7xhj9' target='_blank'>
                                   <img src="pics/greenlakeMap.png"></img> 
                                </a> */}
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.2145689734325!2d-122.32704112289025!3d47.68025277119679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549015db737bb9c7%3A0x88904a12f4e8e731!2sToast%20Mi%20Green%20Lake!5e0!3m2!1sen!2sus!4v1683160138237!5m2!1sen!2sus" width="400" height="300" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                {/* <img className="eggie" src="pics/egg.png" alt="egg"></img> */}
                                <img src={urlFor(logo)} className='bottomLogo'></img>
                                {/* <img className="eggie" src="pics/egg.png" alt="egg"></img> */}

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
