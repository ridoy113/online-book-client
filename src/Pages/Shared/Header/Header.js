import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../img/logo.png'
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar className='head' variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img className='nav_img' src={logo} alt="" />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;