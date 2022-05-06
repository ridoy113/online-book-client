import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../img/logo.png'
import './Header.css'

const Header = () => {
    return (
        <Navbar className='head' collapseOnSelect expand="lg" sticky='top' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img className='nav_img' src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home#tranding">Tranding</Nav.Link>
                        <Nav.Link href="home#review">Review</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/login">
                            LogIn
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;