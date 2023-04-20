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
                    {/* <p> test</p> */}
                    <div className='row'>
                        <div className="col">
                            {/* <img src="pics/TacomaOrder.png"></img> */}
                            <div className="innerWhiteBox" id="firstBox">
                                <h3>Tacoma</h3>
                                <p>2602 N Proctor St Suite D <br/> Tacoma, WA 98407</p>
                                <p>(253)-245-2246</p>
                                <p className="dotRow">..............................................................</p>
                                <p> Order at:</p>
                                <p>..............................................................</p>
                            </div>
                        </div>
                        <div className="col">
                            {/* <img src="pics/GreenlakeOrder.png" alt="GreenlakeOrder"></img> */}
                            <div className="innerWhiteBox" id="secondBox">
                                <h3>GreenLake</h3>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>       
    )
}
