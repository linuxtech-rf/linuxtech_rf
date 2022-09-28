import './Header.scss'

import React from 'react'

import logo from '../img/insta_logo2.png'



//bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
    return (


        <Navbar collapseOnSelect expand="lg"  variant="light" className='header'>
            <Container className='con'>
                <Navbar.Brand href="#home" className='logo'>

                    <img src={logo} alt="" />

                    <h1>
                        <span className='linux'> Linux</span>
                        <span className='tech'>Tech</span>
                        <span className='rf'>_RF</span>
                    </h1>

                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto nav">
                        <Nav.Link href="#features">Home</Nav.Link>

                        <NavDropdown title="Youtube-Tutorials" id="collasible-nav-dropdown">

                            <NavDropdown.Item href="#action/3.1">Linux</NavDropdown.Item>

                            <NavDropdown.Item href="#action/3.3">Programming</NavDropdown.Item>
                            <NavDropdown.Divider />

                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>


                        <Nav.Link href="#pricing">Instagram-Posts</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                    <Nav className='s-nav'>
                        <Nav.Link href="#deets"> 🔗Instagram </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                        🔗Facebook
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header