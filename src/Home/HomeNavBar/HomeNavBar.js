import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const HomeNavBar = () => {
  return (
    <React.Fragment>
      <Navbar expand="lg" className="bg-dark">
        <Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-white"
          />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="m-auto">
              <Nav.Link className="text-white  fs-5 fw-bold " href="home">
                Home
              </Nav.Link>
              <Nav.Link className="text-white  fs-5 fw-bold " href="store">
                Store
              </Nav.Link>
              <Nav.Link className="text-white  fs-5 fw-bold " href="about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};
export default HomeNavBar;
