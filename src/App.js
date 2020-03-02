import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchUsers } from "./action";
import axios from "axios";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Container/Navbar";
import ProductList from "./Components/ProductList";
import ProductRoom from "./Components/ProductRoom";
import Cart from "./Components/Cart";
import Contact from "./Components/Contactus";
import Footer from "./Container/Footer";

import { Route, Switch } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    //console.log(this.props.product);
    this.props.fetchUsers();
    console.log(this.props.product);
  }

  render() {
    // console.log(this.props.product);
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/productlist" component={ProductList} />
          <Route path="/productroom/:id" component={ProductRoom} />
          <Route path="/cart" component={Cart} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
