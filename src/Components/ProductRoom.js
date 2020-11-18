import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class ProductRoom extends Component {
  render() {
    // console.log(this.props.match.params.id);
    // console.log(this.props.product);
    const id = this.props.match.params.id;
    const filteredOne = this.props.product.filter((item) => id === item.id);
    //  console.log(filterd);
    return (
      <Container>
        {filteredOne.map((filtered) => (
          <Card>
            <Card.Header>{filtered.name}</Card.Header>
            <Card.Img variant="top" src={`/${filtered.img}`} />
            <Card.Body>
              <Card.Title>{filtered.catogery}</Card.Title>
              <Card.Text>
                <p>
                  Rs. {filtered.Price} for {filtered.Quantity}
                </p>
              </Card.Text>
              <Link to="/productList">
                <Button variant="primary">Go To Products</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product
  };
};
export default connect(mapStateToProps)(ProductRoom);
