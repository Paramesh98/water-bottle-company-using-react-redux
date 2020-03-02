import React, { Component } from "react";
import { Card, Button, Row, Col, CardGroup, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class FeaturedProducts extends Component {
  render() {
    const { product } = this.props;
    const filtered = product.slice(0, 3);
    return (
      <Container>
        <h3>Featured Products</h3>
        {this.props.product.length > 0 && (
          <Row>
            {filtered.map(item => {
              return (
                <Col md={4}>
                  <Card
                    key={item.id}
                    className="mr-auto"
                    style={{ width: "18rem", margin: "20px" }}
                  >
                    <Card.Header>Featured Product</Card.Header>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>Rs. {item.Price}</Card.Text>
                    </Card.Body>
                    <Link to={`/productroom/${item.id}`}>
                      <Button variant="primary">View Product</Button>
                    </Link>
                  </Card>
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product
  };
};

export default connect(mapStateToProps)(FeaturedProducts);
