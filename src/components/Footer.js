import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer(props) {
    const navList = ["About", "Menu", "Order"];
    const navButtons = navList.map((navName) => {
        const component = (
            <li key={navName} className="py-1">
                <Link className="nav-link active" to={"/" + navName}>{navName}</Link>
            </li>);
        return component;
    })

    const socials = (<ul className='justify-content-start nav'>
        <li className="nav-item pt-2 px-1">
            <a href="">
                <img className="nav-icon" src={'pics/instagram.svg'} alt='' />

            </a>
        </li>
        <li className="nav-item pt-2 px-1">
            <a href="https://www.facebook.com/people/Toast-Mi/100063613930385/">
                <img className="nav-icon" src={'pics/facebook.svg'} alt='' />

            </a>
        </li>
        <li className="nav-item pt-2 px-1">
            <a href="https://www.yelp.com/biz/toast-mi-tacoma">
                <img className="nav-icon" src={'pics/yelp.svg'} alt='' />

            </a>
        </li>
        <li className="nav-item pt-2 px-1">
            <a href="mailto:test@gmail.com">
                <img className="nav-icon" src={'pics/email.svg'} alt='' />
            </a>
        </li>
    </ul>);
    const logo = (<li className='justify-content-center'>
        <img
            src="./pics/logo.jpg"
            width="180"
            height="80"
            className="d-inline-block align-middle"
            alt="logo image"
        />
    </li>)
    return (
        <div className='footer-container justify-content-center py-4'>
            <div className='row' >
                <div className='col logo'>
                    {logo}

                </div>
                <div className='col links'>
                    <ul className='list-inline'>
                        {navButtons}
                    </ul>

                </div>
                <div className='col justify-content-center tacoma'>
                    <div className='text-start'>Tacoma</div>
                    <div className='text-start'>(253)-245-2246</div>
                    <div className='text-start'>7130 Woodlawn Ave NE </div>
                    <div className='text-start'>Seattle, WA 98115</div>
                </div>
                <div className='col justify-content-center greenlake'>
                    <div className='text-start justify-content-center '>Greenlake</div>
                    <div className='text-start'>(253)-245-2246</div>
                    <div className='text-start'>2602 N Proctor St Suite D</div>
                    <div className='text-start'>Tacoma, WA 98407</div>

                </div>
                <div className='col justify-content-center'>
                    <div>
                        <p className='text-start fw-bold'>Hours:</p>
                        <p className='text-start'>open daily// 11:00am - 6:00pm</p>
                        {socials}
                    </div>
                </div>

            </div>
        </div>
    )
}
