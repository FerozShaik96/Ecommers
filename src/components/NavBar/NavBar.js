import React, { useState, useContext } from "react";
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
          <Button variant="primary" className="text-white" onClick={handleShow}>
            <CartIcon className="px-2" />
            <span className="px-2 fw-bold">Cart</span>{" "}
            <span>{numberOfCartItems}</span>
          </Button>
          {setShow && <ModalCart show={show} handleClose={handleClose} />}
        </Container>
      </Navbar>
    </React.Fragment>
  );
}
export default NavBar;
