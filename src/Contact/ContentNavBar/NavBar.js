import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <React.Fragment>
      <Navbar expand="lg" className="bg-dark">
        <Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-white"
          />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="m-auto gap-5">
              <Nav.Link className="text-white  fs-5 fw-bold " href="home">
                Home
              </Nav.Link>
              <Nav.Link className="text-white  fs-5 fw-bold " href="store">
                Store
              </Nav.Link>
              <Nav.Link className="text-white  fs-5 fw-bold " href="about">
                About
              </Nav.Link>
              <Nav.Link href="contact" className="text-white  fs-5 fw-bold ">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};
export default NavBar;
