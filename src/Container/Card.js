import { Card, Button, Row, Col, CardGroup, Container } from "react-bootstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CardComponent extends Component {
  render() {
    return (
      <Container>
        <Row style={{ margin: "20px" }}>
          <Col>
            <h3>About Ganga Water</h3>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card style={{ width: "18rem", margin: "20px" }}>
              <Card.Img variant="top" src="drink4.jpg" />
              <Card.Body>
                <Card.Title>Drink the Difference</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Card.Text>
                <Link to="/productlist">
                  <Button variant="primary">Products</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem", margin: "20px" }}>
              <Card.Img variant="top" src="drink2.jpg" />
              <Card.Body>
                <Card.Title>A new taste for the world is rising.</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Card.Text>
                <Link to="/productlist">
                  <Button variant="primary">Products</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "18rem", margin: "20px" }}>
              <Card.Img variant="top" src="drink5.jpg" />
              <Card.Body>
                <Card.Title>Beautyful inside, Outside</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Card.Text>
                <Link to="/productlist">
                  <Button variant="primary">Products</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
