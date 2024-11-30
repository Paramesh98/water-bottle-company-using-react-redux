import { Navbar, Brand, Nav, Container } from "react-bootstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Nav className="mr-auto">
            <Link to="/">
              <Navbar.Brand> Ganga Water</Navbar.Brand>
            </Link>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/about">About Us</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/productlist">Products</Link>
            </Nav.Link>
            {/* <Nav.Link>
              <Link to="contact">Contact Us</Link>
            </Nav.Link> */}
          </Nav>

          <Nav>
            <Link to="/cart"> Cart ( {this.props.cart.length} ) </Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(NavBar);
