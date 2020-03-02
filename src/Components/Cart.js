import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { Card, Button, Row, Col, Table, Container } from "react-bootstrap";
import { getItems, getTotal, isInCart } from "../reducer";
import { removeFromCart } from "../action";
class Cart extends Component {
  render() {
    const { cart, product } = this.props;
    //   console.log(cart);
    //console.log("cart");

    // console.log(this.props.cart);
    return (
      <Container>
        <Row>
          {" "}
          <h3>Your Cart </h3>
        </Row>
        <Row>
          <Table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {this.props.cart.map(item => {
                return (
                  <>
                    <tr key={item.id}>
                      <td>{item.catogery}</td>
                      <td>
                        {" "}
                        <img src={item.img} width="100%" alt="" />
                      </td>
                      <td>{item.name}</td>
                      <td>Rs. {item.Price}</td>
                      <td>
                        <Button
                          variant="danger"
                          onClick={() => this.props.removeFromCart(item.id)}
                        >
                          X
                        </Button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </Table>
        </Row>
        <Row>
          <Col>
            {this.props.cart.length ? (
              <h3>
                Total: <Button variant="warning">Rs. {this.props.total}</Button>
              </h3>
            ) : (
              <h3>No items in your cart</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    product: state.product,
    cart: getItems(state, props),
    total: getTotal(state, props),
    isInCart: isInCart(state, props)
  };
};

const mapDispatchToProps = dispatch => ({
  removeFromCart: id => dispatch(removeFromCart(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
