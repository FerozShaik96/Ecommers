import React, { useContext } from "react";
import CartContext from "../../Store/CartContext";

const Cart = () => {
  const CartCtx = useContext(CartContext);
  const TotalUpdatedAmount = CartCtx.totalAmount;
  return (
    <React.Fragment>
      {CartCtx.items.map((item) => {
        return (
          <div className="border-bottum ms-4" key={item.id}>
            <p className="fw-bold text-muted">{item.Title}</p>
            <div className="mb-2 pb-2">
              {item.Price} X{" "}
              <span className="border ms-2 p-2 bg-info">
                {item.UpdatedAmount}
              </span>
            </div>
            <div className="border border-1 border-primary  mb-3"></div>
          </div>
        );
      })}
      <div className="mt-3 fw-bold text-muted p-2 ms-4 border border-bottum border-info rounded d-flex justify-content-between">
        Total Amount :- <span>{TotalUpdatedAmount}</span>
      </div>
    </React.Fragment>
  );
};
export default Cart;
