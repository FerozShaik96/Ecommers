import React from "react";
import { Modal, Button } from "react-bootstrap";

function ModalCart(props) {
  return (
    <React.Fragment>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Item Name</p>
          <div className="mb-2">Price</div>
          <div className="mb-2">Quantity </div>
          <div className="mb-2">Total Amount</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}
export default ModalCart;
