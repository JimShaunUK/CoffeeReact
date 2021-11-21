import React from 'react'
import {Container, Navbar, Nav} from "react-bootstrap"
import {Link} from 'react-router-dom'
function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Bean 'N Brew</Navbar.Brand>
    <Nav className="mx-auto">
    
      <Nav.Link as={Link} to="/">Home</Nav.Link>
    
      <Nav.Link as={Link} to="/products">Products</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
 
        </div>
    )
}

export default Header
