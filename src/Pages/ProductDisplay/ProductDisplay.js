import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const ProductDisplay = () => {
  const { id } = useParams();
  const paramsId = +id;
  const Data = productsArr.filter((item) => {
    return item.id === paramsId;
  });
  return (
    <Container>
      <Row className="mt-5 d-flex  justify-content-center">
        <Col className=" d-flex  justify-content-center">
          <img src={Data[0].imageUrl} alt={Data[0].title} />
        </Col>
        <Col className="flex-column align-items-center p-4 ">
          <h3 className="display-4">{Data[0].title}</h3>
          <h3>${Data[0].price}</h3>
        </Col>
      </Row>
    </Container>
    // <Container>
    //   <Row className="mt-5 d-flex justify-content-center">
    //     <Col className="d-flex justify-content-center flex-column align-items-center">
    //       <img src={Data[0].imageUrl} alt={Data[0].title} />
    //       <h3 className="display-4 gap-5">{Data[0].title}</h3>
    //       <h3>${Data[0].price}</h3>
    //     </Col>
    //   </Row>
    // </Container>
  );
};
export default ProductDisplay;
