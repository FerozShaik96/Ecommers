import React from "react";
import Cart from "../../components/Cart/Cart";
import { Modal, Button } from "react-bootstrap";

function ModalCart(props) {
  return (
    <React.Fragment>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-muted fw-bold">Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cart />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Order
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
export default ModalCart;
