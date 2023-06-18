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
      <Navbar expand="lg" bg="dark">
        <Container>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-white"
          />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className=" m-auto ">
              <Nav.Link href="home" className="text-white  fs-5 fw-bold ">
                Home
              </Nav.Link>
              <Nav.Link href="store" className="text-white  fs-5 fw-bold ">
                Store
              </Nav.Link>
              <Nav.Link href="about" className="text-white  fs-5 fw-bold ">
                About
              </Nav.Link>
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
