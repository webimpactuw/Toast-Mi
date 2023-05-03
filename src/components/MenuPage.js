import React from 'react';

function Menu(props) {

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-3 img-col'>
                    <img src='/pics/menu1.png' />
                    <img src='/pics/menu2.png' />
                    <img src='/pics/menu3.png' />
                    <img src='/pics/menu4.png' />
                    <img src='/pics/menu5.png' />
                </div>
                <div className='col-9'>
                    <div className='header-box d-flex flex-column justify-content-center'>
                        <h1 className='menu-header'>Menu</h1>
                    </div>
                    <div className='menu-chunk'>
                        <div className='d-flex justify-content-between'>
                            <h2>BANH MI</h2>
                            <span>1</span>
                        </div>
                        <ul>
                            <li>The Mekong (Grilled Pork)</li>
                            <li>The Notre Dame (Chicken)</li>
                            <li>The Ha Long Bay (Grilled Beef)</li>
                            <li>The Imperial City (House Special)</li>
                        </ul>
                    </div>
                    <div className='menu-chunk'>
                        <div className='d-flex justify-content-between'>
                            <h2>RICE + SALAD BOWL</h2>
                            <span>2</span>
                        </div>
                        <ul>
                            <li>Grilled Pork Bowl</li>
                            <li>Chicken Bowl</li>
                            <li>Grilled Beef Bowl</li>
                            <li>Special Bowl</li>
                        </ul>
                    </div>
                    <div className='menu-chunk'>
                        <div className='d-flex justify-content-between'>
                            <h2>DRINKS</h2>
                            <span>3</span>
                        </div>
                        <ul>
                            <li>Taro Oreo</li>
                            <li>Brown Sugar Fresh Milk</li>
                            <li>Thai Tea</li>
                            <li>Vietnamese Coffee</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default function MenuPage(props) {
    return (
        <div className='header-box d-flex flex-column justify-content-center'>
            <h1 className='menu-header'>Banh Mi</h1>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        {/* <img src="..." class="img-fluid rounded-start" alt="..."/> */}
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
