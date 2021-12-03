import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/getDate"}>Get Date</Nav.Link>
              <Nav.Link as={Link} to={"/LeapYear"}>Leap year</Nav.Link>
              <Nav.Link as={Link} to={"/Prime"}>Prime Number</Nav.Link>
              <Nav.Link as={Link} to={"/guess"}>Guess The Number</Nav.Link>
              <Nav.Link as={Link} to={"/add"}>Addition and Divition</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
