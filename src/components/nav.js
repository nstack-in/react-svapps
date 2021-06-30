import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

function MyNav(props) {
  const activeNav = props.active;

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home" active={activeNav === "Home"}>Home</Nav.Link>
          <Nav.Link as={Link} to="/counter" active={activeNav === "Counter"}>Counter</Nav.Link>
          <Nav.Link as={Link} to="/todo">Todo</Nav.Link>
          <Nav.Link as={Link} to="/about" >About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/covid">Covid</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default MyNav;
