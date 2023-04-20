import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export default function Header() {
    const navList = ["About", "Menu", "Order"];
    const navButtons = navList.map((navName) => {
        const component = (
            <li key={navName} className="nav-item">
                 <a className="nav-link active" href={"/"+navName}>{navName}</a>
            </li>);
        return component;
    })

    return (
        <div className="container">
            <div className='row pt-2'>
                <ul className="nav justify-content-center align-items-center ">
                    <div className='nav col-3 align-middle '>
                        {navButtons}
                    </div>
                    <li className='nav-item col-2 justify-content-center'>
                        <a href="/">
                        <img
                        src="./pics/logo.jpg"
                        width="180"
                        height="80"
                        className="d-inline-block align-middle"
                        alt="logo image"
                        />
                        </a>
                    </li>
                    <div className='nav col-3 justify-content-center'>
                    <li className="nav-item">
                        <a className="nav-link active">Follow us!</a>
                    </li>
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
                    </div>
                    
                </ul>                
            </div>
        </div>

    );
}