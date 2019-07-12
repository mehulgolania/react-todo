import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Navbar, Nav } from 'react-bootstrap';

function Navigation() {
  return(
    <>
      <Navbar collapseOnSelect bg="primary" variant="dark" expand="lg" className="mb-3" sticky="top">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>React Todo</Navbar.Brand>
          </LinkContainer>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <LinkContainer exact to="/"><Nav.Link active={false}>Home</Nav.Link></LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;