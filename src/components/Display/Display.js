import React from "react";
import Content from "../Content/Content";
function Display(props) {
  return (
    <React.Fragment>
      <h2 className="text-center my-4">Music </h2>
      <div className="container my-4">
        <div className="row justify-content-center align-items-center ">
          {props.products.map((item, index) => {
            return (
              <Content
                key={item.id}
                id={item.id}
                url={item.image}
                title={item.title}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
export default Display;
