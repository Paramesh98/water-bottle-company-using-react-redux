import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { isInCart } from "../reducer";
import { addToCart, removeFromCart } from "../action";
import { connect } from "react-redux";

class Product extends Component {
  handleClick = () => {
    const { id, addToCart, removeFromCart, isInCart } = this.props;

    //  console.log(id);
    //  console.log("id");
    // console.log(this.props.isInCart);

    if (isInCart) {
      removeFromCart(id);
    } else {
      //console.log("is not in cart");
      addToCart(id);
    }
  };
  render() {
    const { item } = this.props;
    return (
      <>
        <Col md={4}>
          <Card key={item.id} style={{ margin: "20px" }}>
            <Card.Header>{item.catogery}</Card.Header>
            <Link to={`/productroom/${item.id}`}>
              <Card.Img variant="top" src={item.img} />{" "}
            </Link>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>Rs. {item.Price}</Card.Text>
            </Card.Body>

            <Button
              variant={this.props.isInCart ? "danger" : "primary"}
              onClick={this.handleClick}
            >
              {this.props.isInCart ? "Remove From Cart" : "Add To Cart"}
            </Button>
          </Card>
        </Col>
      </>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    product: state.product,
    cart: state.cart,
    isInCart: isInCart(state, props)
  };
};

const mapDispatchToProps = dispatch => ({
  addToCart: id => dispatch(addToCart(id)),
  removeFromCart: id => dispatch(removeFromCart(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
