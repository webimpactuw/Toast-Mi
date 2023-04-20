import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
export default function Header() {
    const navList = ["About", "Menu", "Order"];
    const navButtons = navList.map((navName) => {
        const component = (
            <li key={navName} className="nav-item">
                <Link className="nav-link active" to={"/" + navName}>{navName}</Link>
            </li>);
        return component;
    })
    const socials = (<div className='nav justify-content-center'>
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

        </li></div>);
    return (
        <div >
            <div className='large-header row pt-2 '>
                <ul className="nav justify-content-center align-items-center">
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
                        {socials}
                    </div>

                </ul>
            </div>

            <Navbar expand="lg" className="small-header justify-content-center align-items-center">
                <Container>
                    <Navbar.Brand className='mx-auto' href="#home">
                        <a href="/">
                            <img
                                src="./pics/logo.jpg"
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