import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Link} from 'react-router-dom'
import auth from '../Firebase/Firebase.init';

const Header = () => {

  const [user] = useAuthState(auth);
  const handleSignOut = () =>{
    signOut(auth);
  }


    return (
    <Navbar bg="primary" sticky='top' variant="dark">
    <Container>
        <Navbar.Brand as={Link} to="/">DOCK ONLINE</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/checkout">Check Out</Nav.Link>
        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
        {
          user
          ?
          <>
          <Nav.Link as={Link} to='/addservice'>Add Service</Nav.Link>
          <Nav.Link as={Link} to='/orders'>Orders</Nav.Link>
          <Button onClick={handleSignOut} veriant='info'>Log out</Button>
          </>
          :
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        }
        </Nav>
    </Container>
  </Navbar>

    );
};

export default Header;