import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';


export default function Header() {

    const navList = ["About", "Menu", "Order"];

    const navButtons = navList.map((navName) => {
        const component = (
            <li key={navName} className="nav-item d-flex p-2">
                <NavLink className="d-flex flex-column" to={"/" + navName.toLowerCase()}>
                    <span className="nav-text">{navName}</span>
                </NavLink>
            </li>);
        return component;
    })

    return (
        <Navbar className="headerColor" collapseOnSelect expand="lg" variant="dark">
            <Container>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav>
                        <ul className="navbar-nav nav-justified w-100 text-center">
                            {navButtons}
                            <Navbar.Brand href="#home">
                                <img
                                    src="pics/logo.jpg"
                                    width="53"
                                    height="45"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                            </Navbar.Brand>
                        </ul>
                    </Nav>
                    <Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}