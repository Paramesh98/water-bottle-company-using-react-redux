import React, { Component } from "react";
import { Container, Row, CardGroup, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../action";
import Product from "./Product";

class ProductList extends Component {
  render() {
    const { addToCart } = this.props;
    // console.log(this.props.addToCart);
    return (
      <Container>
        <h3>Products </h3>
        <Row>
          {this.props.product.map(item => {
            return <Product id={item.id} key={item.id} item={item} />;
          })}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product,
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => ({
  addToCart: id => dispatch(addToCart(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
