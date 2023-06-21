import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import ModalCart from "../../UI/Modal/Modal";
import CartContext from "../../Store/CartContext";
import CartIcon from "../Cart/CartIcon";

function NavBar() {
  const cardCtx = useContext(CartContext);
  const numberOfCartItems = cardCtx.items.reduce((currNumber, item) => {
    return currNumber + item.UpdatedAmount;
  }, 0);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <React.Fragment>
      <Navbar expand="lg" bg="dark">
        <Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-white"
          />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className=" m-auto gap-5">
              <Link
                to="/home"
                className="text-white p-3 text-decoration-none fs-5 fw-bold "
              >
                Home
              </Link>
              <Link
                to="/store"
                className="text-white p-3 text-decoration-none fs-5 fw-bold "
              >
                Store
              </Link>
              <Link
                to="/about"
                className="text-white p-3 text-decoration-none fs-5 fw-bold "
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
            <Button
              variant="primary"
              className="text-white"
              onClick={handleShow}
            >
              <CartIcon className="px-2" />
              <span className="px-2 fw-bold">Cart</span>{" "}
              <span>{numberOfCartItems}</span>
            </Button>
            {setShow && <ModalCart show={show} handleClose={handleClose} />}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}
export default NavBar;
