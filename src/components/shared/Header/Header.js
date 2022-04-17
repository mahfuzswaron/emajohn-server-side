import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
    <Navbar bg="primary" variant="dark">
    <Container>
        <Navbar.Brand as={Link} to="/">DOCK ONLINE</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/checkout">Check Out</Nav.Link>
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav>
    </Container>
  </Navbar>

    );
};

export default Header;