import React from "react";
import { Navbar, Nav } from 'react-bootstrap'

function NavBar () {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href="/">Google Books</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="/">Search</Nav.Link>
                <Nav.Link href="/saved">Saved</Nav.Link>
            </Nav>
        </Navbar>
    );
  }
  
  export default NavBar;
  