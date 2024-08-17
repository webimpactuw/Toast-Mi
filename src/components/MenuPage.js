import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';
import sanityClient from '../client'
import imageUrlBuilder from '@sanity/image-url';
import lBtn from './left.png';
import rBtn from './right.png'
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}
const BANH_MI = [
    {
        name: "The Mekong (Grilled Pork)",
        description: "Grilled Pork seasoned with our sauces combined with fresh veggies",
        image: urlFor("https://cdn.sanity.io/images/j48r7c81/production/1350857a30b761908b276fdaf1aefaa6e77a6ae2-124x82.png")
    },
    {
        name: "The Notre Dame (Shredded Chicken)",
        description: "Shredded Chicken seasoned with our sauces and tossed with caramelized onion",
        image: urlFor("https://cdn.sanity.io/images/j48r7c81/production/b45de030fcbb50994a25067caa8ca8f0a20ea595-124x82.png")
    },
    {
        name: "The Sapa (Sautéed Tofu)",
        description: "Great Vegetarian Option! Tofu Sautéed in lemongrass and coconut milk.",
        image: urlFor("https://cdn.sanity.io/images/j48r7c81/production/646eaa57489f21ae14255717ae5632aef89ced81-124x82.png")
    },
    {
        name: "The Hoi An (Classic Cold Cuts)",
        description: "A combination of different traditional Vietnamese cold cuts comes together",
        image: urlFor("https://cdn.sanity.io/images/j48r7c81/production/857affd8606af4c279fca70423c68313a1eebd4b-124x82.png")
    },
    {
        name: "The Dragon Bridge (Meatballs)",
        description: "Traditional Vietnamese pork meatballs with tomato sauce.",
        image: urlFor("https://cdn.sanity.io/images/j48r7c81/production/5c15a8a6ee68ed5b9cd07311b0389b1830cfdf96-124x82.png")
    },
    {
        name: "The Ha Long Bay (Grilled Beef)",
        description: "Shredded Chicken seasoned with our sauces and tossed with caramelized onion",
        image: urlFor("https://cdn.sanity.io/images/j48r7c81/production/5bce2b568669cb1a243caa32e4e810df0f96f5a8-124x82.png")
    },
    {
        name: "The Imperial City (House Special)",
        description: "Our House special Banh Mi includes 2 types of meat of your choice, with a sunny-side-up egg on top!",
        image: urlFor("https://cdn.sanity.io/images/j48r7c81/production/1f1c59918c16334c8092d7f8a669b71a000f5929-124x82.png")
    }
];

const BOWLS = [
    {
        name: "Grilled Pork",
        description: "",
        image: urlFor("https://cdn.sanity.io/images/j48r7c81/production/b5f7c4a65b66fe4f6ca10a55b0376218747aca57-128x123.png")
    },
    {
        name: "Shredded Chicken",
        description: "",
        image: urlFor("https://cdn.sanity.io/images/j48r7c81/production/27ed2d0d00a13c6e4ad40cc493db05e55acc615e-128x123.png")
    },
    {
        name: "Grilled Beef",
        description: "",
        image: urlFor("https://cdn.sanity.io/images/j48r7c81/production/9caa7ad1e235d2160a62b914edfb951b5d43a465-128x123.png")
    },
    {
        name: "Sauteed Tofu",
        description: "",
        image: urlFor("https://cdn.sanity.io/images/j48r7c81/production/febfc86cd18e14e0e18c3a820dfa9ff5a6222af4-128x123.png")
    },
    {
        name: "House Special Bowl",
        description: "",
        image: urlFor("https://cdn.sanity.io/images/j48r7c81/production/045ee2ce6cc7aa5e26465539f624dc36b204303b-128x123.png")
    },
];

const DRINKS = [
    {
        name: "Matcha Mango",
        description: "",
        image: urlFor("https://cdn.sanity.io/images/j48r7c81/production/c8164c0a2b8b48387540337938d750b31123b11d-125x120.png")
    },
    {
        name: "Taro Oreo",
        description: "",
        image: urlFor("https://cdn.sanity.io/images/j48r7c81/production/854b856f8df7504716c9aa95c32ff86fbf75e7d8-125x120.png")
    },
    {
        name: "Strawberry Cheesecake",
        description: "",
        image: urlFor("https://cdn.sanity.io/images/j48r7c81/production/3c2f7e97104ef51630d9d11344414f92372d796d-125x120.png")
    },
    {
        name: "Coconut Coffee",
        description: "",
        image: urlFor("https://cdn.sanity.io/images/j48r7c81/production/3ab663b426e24d20aca9fc5c1067c11e7b7beebc-125x120.png")
    },
    {
        name: "Brown Sugar Fresh Milk Boba",
        description: "",
        image: urlFor("https://cdn.sanity.io/images/j48r7c81/production/2afec32e104324535d0984dfc7e15069bd8f88ff-125x120.png")
    },
    {
        name: "Classic Milk Tea",
        description: "",
        image: urlFor("https://cdn.sanity.io/images/j48r7c81/production/90a0f76388b8e42f4528f14f9c501ecf94c389a8-125x120.png")
    },
    {
        name: "Fresh Fruit Tea",
        // description: "Green tea with your choice of Fruit! (Strawberry, Mango, Peach)",
        description: "",
        image: urlFor("https://cdn.sanity.io/images/j48r7c81/production/6c179ebd98c72804ea78ecddd1b85434fe5d1abd-125x120.png")
    },
    {
        name: "Thai Tea",
        description: "",
        image: urlFor("https://cdn.sanity.io/images/j48r7c81/production/3902ac1dd5339043bff238cf848fd931606c80aa-125x120.png")
    },
    {
        name: "Vietnamese Coffee",
        description: "",
        image: urlFor("https://cdn.sanity.io/images/j48r7c81/production/e60d82c2b5550d8dbf3837910cc04921ca8c10a0-125x120.png")
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
    // useEffect(() => {
    //     sanityClient.fetch('*[_type == "menu"]').then((data) => {
    //         setMenuImage(data[0])
    //         console.log(data[0])
    //     })

    // }, []);
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
                            <NavLink to='banhmi'><h2>BANH MI</h2>
                            {/* <FaRegArrowAltCircleRight size="50px" style={{marginLeft: '-100px'}}/> */}</NavLink>
                            {/* <span>1</span> */}
                            <NavLink to='banhmi'>
                                <FaRegArrowAltCircleRight className='icon' size="70px" color='#BC8F5A'/>
                            </NavLink>
                            
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
                            {/* <span>2</span> */}
                            <NavLink to='bowls'>
                                <FaRegArrowAltCircleRight className='icon' size="70px" color='#BC8F5A'/>
                            </NavLink>
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
                            {/* <span>3</span> */}
                            <NavLink to='drinks'>
                                <FaRegArrowAltCircleRight className='icon' size="70px" color='#BC8F5A'/>
                            </NavLink>
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
    // useEffect(() => {
    //     sanityClient.fetch('*[_type == "bahnmi"]|order(orderNum){title,description,mainImage}').then((data) => {
    //         setMenuInfo(data)
    //     })

    // }, []);
    // const itemsChunk = menuInfo.map((item) => {
    const itemsChunk = BANH_MI.map((item) => {
        const component = (
            <div className="card col-md-5 col-12 m-2 p-4">
                <div className="row g-0 p-3">
                    <div className="col-8 d-flex align-items-center justify-content-center flex-column">
                        <div className="card-body">
                            {/* <h5 className="card-title text-start">{item.title}</h5> */}
                            <h5 className="card-title text-start">{item.name}</h5>
                            <p className="card-text text-start">{item.description}</p>
                            {/* <p className="card-text text-start">{item.price}</p> */}
                        </div>
                    </div>
                    <div className="col-4  d-flex align-items-center justify-content-center flex-column item-img">
                        {/* <img src={"pics/banhmi/" + item.name + ".png"} className="" alt={item.name} width="124" height="82" /> */}
                        {/* <img src={urlFor(item.mainImage.asset._ref)} className="" alt={item.name} width="140" height="90" /> */}
                        <img src={item.image} alt={item.name} width="160" height="95"/>
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
                    <li><button variant="info" className='page-button'><img src={lBtn}></img></button></li>
                    <li><h2 className='page-label'>Page 1</h2></li>
                    <li><Link to='/menu/bowls'><button variant="info" className='page-button'><img src={rBtn}></img></button></Link></li>
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
    // useEffect(() => {
    //     sanityClient.fetch('*[_type == "bowl"]|order(orderNum){title,description,mainImage}').then((data) => {
    //         setBowlInfo(data)
    //         console.log(data)
    //     })

    // }, []);
    // const itemsChunk = bowlInfo.map((item) => {
    const itemsChunk = BOWLS.map((item) => {
        const component = (
            <div className="card col-md-5 col-12 m-2 p-3">
                <div className="row g-0">
                    <div className="col-8 d-flex align-items-center justify-content-center flex-column">
                        <div className="card-body offset">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                    </div>
                    <div className="col-4  d-flex align-items-center justify-content-center flex-column item-img">
                        {/* <img src={urlFor(item.mainImage.asset._ref)} className="" alt={item.name} width="124" height="90" /> */}
                        <img src={item.image} className="" alt={item.name} width="124" height="90" />
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
                    <Link to='/menu/banhmi'><button variant="info" className='page-button'><img src={lBtn}></img></button></Link>
                    <h2 className='page-label'>Page 2</h2>
                    <Link to='/menu/drinks'><button variant="info" className='page-button'><img src={rBtn}></img></button></Link>
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
    // useEffect(() => {
    //     sanityClient.fetch('*[_type == "drinks"]|order(orderNum){title,description,mainImage}').then((data) => {
    //         setDrinkInfo(data)
    //         console.log(data)
    //     })

    // }, []);
    // const itemsChunk = drinkInfo.map((item) => {
    const itemsChunk = DRINKS.map((item) => {
        const component = (
            <div className="card col-md-5 col-12 m-2 p-3">
                <div className="row g-0">
                    <div className="col-8 d-flex align-items-center justify-content-center flex-column">
                        <div className="card-body offset">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                        </div>
                    </div>
                    <div className="col-4  d-flex align-items-center justify-content-center flex-column item-img">
                        {/* <img src={urlFor(item.mainImage.asset._ref)} className="" alt={item.name} width="124" height="100" /> */}
                        <img src={item.image} className="" alt={item.name} width="124" height="100" />
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
                    <li><Link to='/menu/bowls'><button variant="info" className='page-button'><img src={lBtn}></img></button></Link></li>
                    <li><h2 className='page-label'>Page 3</h2></li>
                    <li><Link to='/menu/bowls'><button variant="info" className='page-button'><img src={rBtn}></img></button></Link></li>
                </ul>
            </div>
        </div>
    )
}
