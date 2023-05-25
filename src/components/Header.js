import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import sanityClient from '../client'

import imageUrlBuilder from '@sanity/image-url';
const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}

export default function Header() {
    const [logo, setlogo] = useState(
        'image-45c8e6269aa3b3cd3f5e73ba8e04f470fc794c8c-266x146-png');
    useEffect(() => {
        sanityClient.fetch('*[_type == "logo"]').then((data) => {
            setlogo(data[0].logo.asset._ref)
            console.log(logo)
        }).catch(error => console.log(error))

    }, []);
    const [socialInfo, setSocialInfo] = useState({
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
            setSocialInfo(data[0])
        }).catch(error => console.log(error))
    }, [])
    const navList = ["About", "Menu", "Order"];
    const navButtons = navList.map((navName) => {
        const component = (
            <li key={navName} className="nav-item">
                <Link className="nav-link link-dark active" to={"/" + navName}>{navName}</Link>
            </li>);
        return component;
    })
    const socials = (<div className='nav justify-content-center'>
        <li className="nav-item pt-2 px-1">
            <a href={socialInfo.instagram}>
                <img className="nav-icon" src='/pics/instagram.svg' alt='ig' />
            </a>
        </li>
        <li className="nav-item pt-2 px-1">
            <a href={socialInfo.facebook}>
                <img className="nav-icon" src='/pics/facebook.svg' alt='fb' />
            </a>
        </li>
        <li className="nav-item pt-2 px-1">
            <a href={socialInfo.yelp}>
                <img className="nav-icon" src='/pics/yelp.svg' alt='yp' />

            </a>
        </li>
        <li className="nav-item pt-2 px-1">
            <a href={socialInfo.email}>
                <img className="nav-icon" src='/pics/email.svg' alt='em' />
            </a>

        </li></div>);
    return (
        <div className='container' >
            <div className='large-header row pt-2 '>
                <ul className="nav justify-content-center align-items-center">
                    <div className='nav col-3 align-middle '>
                        {navButtons}
                    </div>
                    <li className='nav-item col-2 justify-content-center'>
                        <a href="/">
                            <img
                                // src="./pics/logo.jpg"
                                src={urlFor(logo)}
                                width="180"
                                height="80"
                                className="d-inline-block align-middle"
                                alt="logo image"
                            />
                        </a>
                    </li>
                    <div className='nav col-3 justify-content-center'>
                        <li className="nav-item">
                            <a className="nav-link link-dark active">Follow us!</a>
                        </li>
                        {socials}
                    </div>

                </ul>
            </div>

            <Navbar expand="lg" className="small-header justify-content-center align-items-center">
                <Container>
                    <Navbar.Brand className='mx-auto' href="#home">
                        <a href="/">
                            <img
                                src={urlFor(logo)}
                                width="180"
                                height="80"
                                className="d-inline-block align-middle"
                                alt="logo image"
                            />
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-collapse" />
                    <Navbar.Collapse id="navbar-collapse">
                        <Nav className="mx-auto">
                            {navButtons}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}