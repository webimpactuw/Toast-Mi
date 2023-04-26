import React from 'react';
import "../App.css";

export default function OrderPage(props) {

    return (
        // Everything needs to be encapsulated by 1 div (only returns 1 thing)
        // 1. Always pull (git pull)
        // 2. Work 
        // 3. Commit (git commit -a -m "commit message"")
        // 4. Pull (git pull)
        // 5. Push (git push)
        <div>
             <div class="header">
                <h1>Order</h1>
                <p>Pickup and Delivery</p>
            </div>

            <div class = "content">
                <p>----------- open daily from 11am to 6pm -----------</p>
            </div>

            <div class = "greenBox">
                <div class="images">

                    <div className='row'>
                        <div className="col">
                            {/* <img src="pics/TacomaOrder.png"></img> */}
                            <div className="innerWhiteBox" id="firstBox">
                                <h3>Tacoma</h3>
                                <p>2602 N Proctor St Suite D <br/> Tacoma, WA 98407</p>
                                <p>(253)-245-2246</p>
                                {/* <br/> */}
                                <hr className="dottedLine"></hr>
                                <p> Order at:</p>
                                <hr className="dottedLine"></hr>

                                {/* Receipt Effect */}
                                <div className='row'>
                                    <div className='col'>
                                        <div className='websiteNames'>
                                            <p><a href='url'>Doordash</a></p>
                                            <p><a href='url'>Ubereats</a></p>
                                            <p><a href='url'>Grubhub</a></p>
                                            <p><a href='url'>Clover</a></p>
                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className='prices'>
                                            <p>0.00</p>
                                            <p>0.00</p>
                                            <p>0.00</p>
                                            <p>0.00</p>
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
                                <a href='https://www.google.com/maps/place/Toast+Mi+Tacoma/@47.2713449,-122.4918014,17z/data=!3m2!4b1!5s0x549054ef2265017d:0x1cc5da800182baa4!4m6!3m5!1s0x5490555380efde05:0x9285e2e7a142ae!8m2!3d47.2713449!4d-122.4892265!16s%2Fg%2F11hf9slg_3' target='_blank'>
                                    <img src="pics/tacomaMap.png"></img>
                                </a>
                                <img src="pics/logo.jpg" className='bottomLogo'></img>
                            </div>
                        </div>
                        <div className="col">
                            {/* <img src="pics/GreenlakeOrder.png" alt="GreenlakeOrder"></img> */}
                            <div className="innerWhiteBox" id="secondBox">
                                <h3>GreenLake</h3>
                                <p>7130 Woodlawn Ave NE <br/> Seattle, WA 98115</p>
                                <p>(206)-402-5546</p>
                                {/* <br/> */}
                                <hr className="dottedLine"></hr>
                                <p> Order at:</p>
                                <hr className="dottedLine"></hr>

                                {/* Receipt Effect */}
                                <div className='row'>
                                    <div className='col'>
                                        <div className='websiteNames'>
                                            <p><a href='url'>Doordash</a></p>
                                            <p><a href='url'>Ubereats</a></p>
                                            <p><a href='url'>Grubhub</a></p>
                                            <p><a href='url'>Clover</a></p>
                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className='prices'>
                                            <p>0.00</p>
                                            <p>0.00</p>
                                            <p>0.00</p>
                                            <p>0.00</p>
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
                                <a href='https://www.google.com/maps/place/Toast+Mi+Green+Lake/@47.6802528,-122.3270411,17z/data=!3m1!4b1!4m6!3m5!1s0x549015db737bb9c7:0x88904a12f4e8e731!8m2!3d47.6802528!4d-122.3244662!16s%2Fg%2F11t5q7xhj9' target='_blank'>
                                   <img src="pics/greenlakeMap.png"></img> 
                                </a>
                                <img src="pics/logo.jpg" className='bottomLogo'></img>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>       
    )
}
