import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../img/logo.png'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth);
        navigate('/login')
    }



    return (
        <Navbar className='head' collapseOnSelect expand="lg" sticky='top' variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img className='nav_img' src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href='home#home'>Home</Nav.Link>
                        <Nav.Link href="home#tranding">Tranding</Nav.Link>
                        <Nav.Link href="home#review">Review</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        {
                            user && <>
                                <Nav.Link as={Link} to="/addTrandingProduct">Add</Nav.Link>
                                <Nav.Link as={Link} to="/orderHistory">My Items</Nav.Link>
                                <Nav.Link as={Link} to="/manageTrandingProducts">Manage</Nav.Link>

                            </>
                        }
                        {
                            user ?
                                <button className='btn btn-link text-danger text-decoration-none' onClick={handleSignOut}>SignOut</button>
                                :
                                <Nav.Link as={Link} to="/login">
                                    LogIn
                                </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;