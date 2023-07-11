import React, { useRef, useContext, useEffect, useState } from "react";
import CartContext from "../../Store/CartContext";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
const Content = (props) => {
  const cartctx = useContext(CartContext);
  const [enterd, setEnteredData] = useState(true);
  const Amountref = useRef();
  let email = localStorage.getItem("email");
  email = email.replace(/[^a-zA-Z0-9]/g, "");
  const submitHandler = (event) => {
    setEnteredData(!enterd);
    event.preventDefault();
    const Amount = Amountref.current.value;
    const UpdatedAmount = +Amount;
    const Title = props.title;
    const Price = props.price;
    const id = props.id;
    if (UpdatedAmount.trim === 0 || UpdatedAmount < 1 || UpdatedAmount > 5) {
      return;
    }
    const Data = {
      Title,
      Price,
      UpdatedAmount,
      id,
    };
    cartctx.addItem(Data);
    //   fetch(
    //     `https://crudcrud.com/api/04d7bdbe2b4c4efd8cb7bdc97a1d5425/Ecommers${email}`,
    //     {
    //       method: "POST",
    //       body: JSON.stringify({
    //         id: id,
    //         Title: Title,
    //         Price: Price,
    //         UpdatedAmount: UpdatedAmount,
    //       }),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   )
    //     .then((res) => res.json())
    //     .then((data) => console.log(data));
    // };
    // useEffect(() => {
    //   fetch(
    //     `https://crudcrud.com/api/04d7bdbe2b4c4efd8cb7bdc97a1d5425/Ecommers${email}`
    //   )
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       console.log(typeof data[0].UpdatedAmount);
    //       return cartctx.addItem(
    //         data.map((item) => {
    //           return item;
    //         })
    //       );
    //     });
    // }, []);
  };
  return (
    <div className="col-sm-1 col-md-auto col-lg-4 m-4">
      <div className="card">
        <Link to={`${props.id}`}>
          <h5 className="card-title text-center m-3">{props.title}</h5>
          <img src={props.url} className="card-img-top" alt={props.title} />
        </Link>
        <div className="card-body d-flex justify-content-between align-items-center">
          <span className="card-text ">{props.price}$</span>
          <Form onSubmit={submitHandler}>
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Label className="ms-5 mt-0">Amount</Form.Label>
              <Form.Control
                ref={Amountref}
                type="number"
                min="1"
                max="10"
                className="ms-5 mb-2"
                step="1"
                defaultValue="1"
                style={{ width: "4rem", height: "2rem" }}
              />
              <Button type="submit" className="ms-5">
                Add To Cart
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Content;
