import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import sanityClient from '../client'
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    // console.log(builder.image('image-646eaa57489f21ae14255717ae5632aef89ced81-124x82-png'))
    return builder.image(source);
}
const BANH_MI = [
    {
        name: "The Mekong (Grilled Pork)",
        description: "Grilled Pork"
    },
    {
        name: "The Notre Dame (Shredded Chicken)",
        description: "Shredded Chicken seasoned with our sauces and tossed with caramelized onion"
    },
    {
        name: "The Sapa (Sautéed Tofu)",
        description: "Great Vegetarian Option! Tofu Sautéed in lemongrass and coconut milk."
    },
    {
        name: "The Hoi An (Classic Cold Cuts)",
        description: "A combination of different traditional Vietnamese cold cuts comes together"
    },
    {
        name: "The Dragon Bridge (Meatballs)",
        description: "Traditional Vietnamese pork meatballs with tomato sauce."
    },
    {
        name: "The Ha Long Bay (Grilled Beef)",
        description: "Shredded Chicken seasoned with our sauces and tossed with caramelized onion"
    },
    {
        name: "The Imperial City (House Special)",
        description: "Our House special Banh Mi includes 2 types of meat of your choice, with a sunny-side-up egg on top!"
    }
];

const BOWLS = [
    {
        name: "Grilled Pork",
        description: ""
    },
    {
        name: "Shredded Chicken",
        description: ""
    },
    {
        name: "Grilled Beef",
        description: ""
    },
    {
        name: "Sauteed Tofu",
        description: ""
    },
    {
        name: "House Special Bowl",
        description: ""
    },
];

const DRINKS = [
    {
        name: "Matcha Mango",
        description: ""
    },
    {
        name: "Taro Oreo",
        description: ""
    },
    {
        name: "Strawberry Cheesecake",
        description: ""
    },
    {
        name: "Coconut Coffee",
        description: ""
    },
    {
        name: "Brown Sugar Fresh Milk Boba",
        description: ""
    },
    {
        name: "Classic Milk Tea",
        description: ""
    },
    {
        name: "Fresh Fruit Tea",
        description: "Green tea with your choice of Fruit! (Strawberry, Mango, Peach)"
    },
    {
        name: "Thai Tea",
        description: ""
    },
    {
        name: "Vietnamese Coffee",
        description: ""
    },
];

export function MenuRoot(props) {
    const [menuInfo, setMenuInfo] = useState(['hello', 'nothing']);
    useEffect(() => {
        sanityClient.fetch('*[_type == "bahnmi"]').then((data) => {
            // console.log(data[0].mainImage.asset._ref)
            setMenuInfo(data)

        })

    }, []);
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-3 img-col'>
                    <img src={urlFor(menuInfo[0].mainImage.asset._ref)} />
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
                            <NavLink to='banhmi'><h2>BANH MI</h2></NavLink>
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

export function BanhMiMenu(props) {
    const itemsChunk = BANH_MI.map((item) => {
        const component = (
            <div className="card col-md-5 col-12 m-2 p-3">
                <div className="row g-0">
                    <div className="col-8 d-flex align-items-center justify-content-center flex-column">
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                    </div>
                    <div className="col-4  d-flex align-items-center justify-content-center flex-column item-img">
                        <img src={"pics/banhmi/" + item.name + ".png"} className="" alt={item.name} width="124" height="82" />
                    </div>
                </div>
            </div>
        );
        return component;
    })

    return (
        <div className='container'>
            <h1 className='menu-type'>Banh Mi</h1>
            <div className="card-container row p-3 justify-content-center menu-items">
                {itemsChunk}
                <div className='d-flex d-flex justify-content centeralign-items-center'>
                    <h1>Page 1</h1>
                    <Button>Test</Button>
                </div>
            </div>
        </div>
    )
}

export function BowlsMenu(props) {
    const itemsChunk = BOWLS.map((item) => {
        const component = (
            <div className="card col-md-5 col-12 m-2 p-3">
                <div className="row g-0">
                    <div className="col-8 d-flex align-items-center justify-content-center flex-column">
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                    </div>
                    <div className="col-4  d-flex align-items-center justify-content-center flex-column item-img">
                        <img src={"pics/bowls/" + item.name + ".png"} className="" alt={item.name} width="124" height="82" />
                    </div>
                </div>
            </div>
        );
        return component;
    })

    return (
        <div className='container'>
            <h1 className='menu-type'>Banh Mi</h1>
            <div className="card-container row p-3 justify-content-center menu-items">
                {itemsChunk}
                <div className='d-flex d-flex justify-content centeralign-items-center'>
                    <h1>Page 1</h1>
                    <Button>Test</Button>
                </div>
            </div>
        </div>
    )
}

export function DrinksMenu(props) {
    const itemsChunk = DRINKS.map((item) => {
        const component = (
            <div className="card col-md-5 col-12 m-2 p-3">
                <div className="row g-0">
                    <div className="col-8 d-flex align-items-center justify-content-center flex-column">
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                    </div>
                    <div className="col-4  d-flex align-items-center justify-content-center flex-column item-img">
                        <img src={"pics/drinks/" + item.name + ".png"} className="" alt={item.name} width="124" height="82" />
                    </div>
                </div>
            </div>
        );
        return component;
    })

    return (
        <div className='container'>
            <h1 className='menu-type'>Banh Mi</h1>
            <div className="card-container row p-3 justify-content-center menu-items">
                {itemsChunk}
                <div className='d-flex d-flex justify-content centeralign-items-center'>
                    <h1>Page 1</h1>
                    <Button>Test</Button>
                </div>
            </div>
        </div>
    )
}
