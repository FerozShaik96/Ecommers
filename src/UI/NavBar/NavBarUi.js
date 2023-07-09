import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import ModalCart from "../Modal/Modal";
import CartContext from "../../Store/CartContext";
import CartIcon from "../../components/Cart/CartIcon";
import AuthContext from "../../Store/AuthContect/auth-Context";

function NavBar() {
  const cardCtx = useContext(CartContext);
  const AuthCtx = useContext(AuthContext);
  let user = AuthCtx.isloggedIn;
  // console.log(userLogin.Loggeddin);
  const numberOfCartItems = cardCtx.items.reduce((currNumber, item) => {
    return currNumber + item.UpdatedAmount;
  }, 0);
  const LogoutHandler = () => {
    localStorage.removeItem("UserDetails");
    AuthCtx.logout();
  };
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

              {user && (
                <div>
                  <Button
                    variant="primary"
                    className="text-white p-2 mt-2 border-none"
                    onClick={handleShow}
                  >
                    <CartIcon className="px-2" />
                    <span className="px-2 fw-bold">Cart</span>{" "}
                    <span>{numberOfCartItems}</span>
                  </Button>
                  <Button
                    onClick={LogoutHandler}
                    className=" p-2 ms-4 mt-2 border-none"
                  >
                    <Link className="text-white " to="signin">
                      Log Out
                    </Link>
                  </Button>
                </div>
              )}

              {!user && (
                <div className="p-3  ">
                  <Link
                    to="/signin"
                    className="text-white p-3  text-decoration-none fs-5 fw-bold "
                  >
                    SignIn
                  </Link>
                  <Link
                    to="/signUp"
                    className="text-white p-3 text-decoration-none fs-5 fw-bold "
                  >
                    SignUp
                  </Link>
                </div>
              )}
            </Nav>
            {/* <Button
              variant="primary"
              className="text-white"
              onClick={handleShow}
            >
              <CartIcon className="px-2" />
              <span className="px-2 fw-bold">Cart</span>{" "}
              <span>{numberOfCartItems}</span>
            </Button> */}
            {setShow && <ModalCart show={show} handleClose={handleClose} />}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}
export default NavBar;
