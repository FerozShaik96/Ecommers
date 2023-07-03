import React, { useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const HomeForm = (props) => {
  const NameRef = useRef();
  const DirectorRef = useRef();
  const DateRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const MovieName = NameRef.current.value;
    const DirectorName = DirectorRef.current.value;
    const DateNumber = DateRef.current.value;
    const userData = {
      Movie: MovieName,
      Director: DirectorName,
      Date: DateNumber,
      id: Math.random().toString(),
    };
    props.onAddMovies(userData);
  };
  return (
    <Container>
      <Row className="bg-dark d-flex justify-content-center">
        <Col className="bg-light w-75 mt-4 ">
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie Name </Form.Label>
              <Form.Control
                ref={NameRef}
                style={{ maxwidth: "500px" }}
                type="text"
                placeholder="Movie Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Movie Director</Form.Label>
              <Form.Control
                type="text"
                ref={DirectorRef}
                placeholder="Director"
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Release Date</Form.Label>
              <Form.Control type="date" ref={DateRef} />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="info" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default HomeForm;
