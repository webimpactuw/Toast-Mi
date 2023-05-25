import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';
import sanityClient from '../client'
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
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
    const [menuImage, setMenuImage] = useState({
        image1: {
            asset: { _ref: 'image-15fa354bc0b7402f721f8a6c17f985abf48719ca-268x279-png' }
        },
        image2: {
            asset: { _ref: 'image-97a2e903494db429ab7ce593a66ae4ceecff5143-270x279-png' }
        },
        image3: {
            asset: { _ref: 'image-11c95e4a5807206ab2813a7aefd8b86f03581296-269x280-png' }
        },
        image4: {
            asset: { _ref: 'image-5f1997cb16f8b41ecd7181838b7d049e006ca34f-271x279-png' }
        },
        image5: {
            asset: { _ref: 'image-1ef66eba1cfd48d12f677b5810beaa05b2acf27f-268x279-png' }
        }
    });
    useEffect(() => {
        sanityClient.fetch('*[_type == "menu"]').then((data) => {
            setMenuImage(data[0])
            console.log(data[0])
        })

    }, []);
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-3 img-col'>
                    {/* <img src={urlFor(menuInfo[0].mainImage.asset._ref)} /> */}
                    <img src={urlFor(menuImage.image1.asset._ref)} />
                    <img src={urlFor(menuImage.image2.asset._ref)} />
                    <img src={urlFor(menuImage.image3.asset._ref)} />
                    <img src={urlFor(menuImage.image4.asset._ref)} />
                    <img src={urlFor(menuImage.image5.asset._ref)} />
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
                            <NavLink to='bowls'><h2>RICE + SALAD BOWL</h2></NavLink>
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
                            <NavLink to='drinks'><h2>DRINKS</h2></NavLink>
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
    const [menuInfo, setMenuInfo] = useState([{
        mainImage: {
            asset: { _ref: 'image-646eaa57489f21ae14255717ae5632aef89ced81-124x82-png' }
        }
    }]);
    useEffect(() => {
        sanityClient.fetch('*[_type == "bahnmi"]|order(orderNum){title,description,mainImage}').then((data) => {
            setMenuInfo(data)
        })

    }, []);
    const itemsChunk = menuInfo.map((item) => {
        const component = (
            <div className="card col-md-5 col-12 m-2 p-4">
                <div className="row g-0">
                    <div className="col-8 d-flex align-items-center justify-content-center flex-column">
                        <div className="card-body">
                            <h5 className="card-title text-start">{item.title}</h5>
                            <p className="card-text text-start">{item.description}</p>
                            {/* <p className="card-text text-start">{item.price}</p> */}
                        </div>
                    </div>
                    <div className="col-4  d-flex align-items-center justify-content-center flex-column item-img">
                        {/* <img src={"pics/banhmi/" + item.name + ".png"} className="" alt={item.name} width="124" height="82" /> */}
                        <img src={urlFor(item.mainImage.asset._ref)} className="" alt={item.name} width="124" height="82" />
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
                {/* <div className='d-flex justify-content-between align-items-center page-nav'>
                    <button variant="info" className='page-button'><img src="pics/left.png"></img></button>
                    <h2 className='page-label'>Page 1</h2>
                    <Link to='/menu/bowls'><button variant="info" className='page-button'><img src="pics/right.png"></img></button></Link>
                </div> */}
                <ul className='button-list first-page'>
                    <li><button variant="info" className='page-button'><img src="pics/left.png"></img></button></li>
                    <li><h2 className='page-label'>Page 1</h2></li>
                    <li><Link to='/menu/bowls'><button variant="info" className='page-button'><img src="pics/right.png"></img></button></Link></li>
                </ul>
            </div>
        </div>
    )
}

export function BowlsMenu(props) {
    const [bowlInfo, setBowlInfo] = useState([{
        title: 'Grilled Pork',
        mainImage: {
            asset: { _ref: 'image-b5f7c4a65b66fe4f6ca10a55b0376218747aca57-128x123-png' }
        },
        description: 'text'
    }]);
    useEffect(() => {
        sanityClient.fetch('*[_type == "bowl"]|order(orderNum){title,description,mainImage}').then((data) => {
            setBowlInfo(data)
            console.log(data)
        })

    }, []);
    const itemsChunk = bowlInfo.map((item) => {
        const component = (
            <div className="card col-md-5 col-12 m-2 p-3">
                <div className="row g-0">
                    <div className="col-8 d-flex align-items-center justify-content-center flex-column">
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                    </div>
                    <div className="col-4  d-flex align-items-center justify-content-center flex-column item-img">
                        <img src={urlFor(item.mainImage.asset._ref)} className="" alt={item.name} width="124" height="82" />
                    </div>
                </div>
            </div>
        );
        return component;
    })

    return (
        <div className='container'>
            <h1 className='menu-type'>Rice and Salad Bowls</h1>
            <div className="card-container row p-3 justify-content-center menu-items">
                {itemsChunk}
                <div className='d-flex justify-content-between align-items-center page-nav'>
                    <Link to='/menu/banhmi'><button variant="info" className='page-button'><img src="pics/left.png"></img></button></Link>
                    <h2 className='page-label'>Page 2</h2>
                    <Link to='/menu/drinks'><button variant="info" className='page-button'><img src="pics/right.png"></img></button></Link>
                </div>
            </div>
        </div>
    )
}

export function DrinksMenu(props) {
    const [drinkInfo, setDrinkInfo] = useState([{
        title: 'Thai Tea',
        mainImage: {
            asset: { _ref: 'image-3902ac1dd5339043bff238cf848fd931606c80aa-125x120-png' }
        },
        description: 'text'
    }]);
    useEffect(() => {
        sanityClient.fetch('*[_type == "drinks"]|order(orderNum){title,description,mainImage}').then((data) => {
            setDrinkInfo(data)
            console.log(data)
        })

    }, []);
    const itemsChunk = drinkInfo.map((item) => {
        const component = (
            <div className="card col-md-5 col-12 m-2 p-3">
                <div className="row g-0">
                    <div className="col-8 d-flex align-items-center justify-content-center flex-column">
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                    </div>
                    <div className="col-4  d-flex align-items-center justify-content-center flex-column item-img">
                        <img src={urlFor(item.mainImage.asset._ref)} className="" alt={item.name} width="124" height="82" />
                    </div>
                </div>
            </div>
        );
        return component;
    })

    return (
        <div className='container'>
            <h1 className='menu-type'>Drinks</h1>
            <div className="card-container row p-3 justify-content-center menu-items">
                {itemsChunk}
                <ul className='button-list third-page'>
                    <li><Link to='/menu/bowls'><button variant="info" className='page-button'><img src="pics/left.png"></img></button></Link></li>
                    <li><h2 className='page-label'>Page 3</h2></li>
                    <li><Link to='/menu/bowls'><button variant="info" className='page-button'><img src="pics/right.png"></img></button></Link></li>
                </ul>
            </div>
        </div>
    )
}
