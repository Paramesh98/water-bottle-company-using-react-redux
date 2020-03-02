import React, { Component } from "react";
import { Carousel, Container } from "react-bootstrap";
import "../styles.css";

export default class CarouselComponent extends Component {
  render() {
    return (
      <Container fluid>
        <Carousel className="height">
          <Carousel.Item>
            <img
              src="1.jpg"
              height=""
              alt=""
              className="d-block w-100 "
              fluid
            />
            <Carousel.Caption>
              <h3>Water is not tasteless! Feel it</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="2.jpg" height="" alt="" className="d-block w-100" />
            <Carousel.Caption>
              <h3>Drops of heaven </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="3.jpg" height="" alt="" className="d-block w-100 " />
            <Carousel.Caption>
              <h3>Taste of nature in a bottle</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}
