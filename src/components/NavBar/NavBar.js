import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

function NavBar() {
  return (
    <React.Fragment>
      <Navbar bg="dark">
        <Container className="">
          <Navbar.Brand href="#home" className="text-white">
            Brand
          </Navbar.Brand>
          <Nav className=" me-5 ">
            <Nav.Link href="#home" className="text-white fs-5 fw-bold ">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="text-white fs-5 fw-bold ">
              Store
            </Nav.Link>
            <Nav.Link href="#link1" className="text-white fs-5 fw-bold ">
              About
            </Nav.Link>
          </Nav>
          <Button variant="primary" className="text-white">
            Cart <span>0</span>
          </Button>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}
export default NavBar;
