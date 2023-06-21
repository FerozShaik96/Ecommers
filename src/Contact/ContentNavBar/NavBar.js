import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

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
              <Link
                className="text-white p-3 text-decoration-none fs-5 fw-bold "
                to="/home"
              >
                Home
              </Link>
              <Link
                className="text-white p-3 text-decoration-none fs-5 fw-bold "
                to="/store"
              >
                Store
              </Link>
              <Link
                className="text-white p-3 text-decoration-none fs-5 fw-bold "
                to="/about"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-white p-3 text-decoration-none fs-5 fw-bold "
              >
                Contact Us
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};
export default NavBar;
