import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <Container>
      <h3 style={{ margin: "20px" }}>About Ganga Water </h3>
      <Row>
        <Col md={6}>
          <img src="./1.jpg" className=" w-100 img-responsive" alt="" />
        </Col>
        <Col md={6} style={{ textAlign: "left", marginTop: "20px" }}>
          <p style={{ marginTop: "20px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus
            vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt.
            Proin libero nunc consequat interdum varius sit amet mattis
            vulputate. Nullam eget felis eget nunc lobortis mattis aliquam
            faucibus purus. Pellentesque nec nam aliquam sem et tortor consequat
            id porta. Feugiat scelerisque varius morbi enim nunc faucibus a
            pellentesque sit. Nunc sed augue lacus viverra vitae. Pellentesque
            habitant morbi tristique senectus. Mattis vulputate enim nulla
            aliquet porttitor lacus.{" "}
          </p>
        </Col>

        <Col md={6} style={{ textAlign: "right", marginTop: "20px" }}>
          <p style={{ marginTop: "20px" }}>
            Pharetra convallis posuere morbi leo urna molestie. Diam maecenas
            ultricies mi eget mauris pharetra. Adipiscing tristique risus nec
            feugiat in. Egestas dui id ornare arcu odio. Id aliquet lectus proin
            nibh nisl condimentum id venenatis a. Augue ut lectus arcu bibendum
            at varius vel pharetra vel. Sed adipiscing diam donec adipiscing
            tristique risus nec feugiat. Vitae auctor eu augue ut lectus arcu.
            Pretium aenean pharetra magna ac placerat vestibulum lectus mauris
            ultrices. Potenti nullam ac tortor vitae purus faucibus ornare
            suspendisse sed. Eget gravida cum sociis natoque penatibus.{" "}
          </p>
        </Col>
        <Col md={6}>
          <img src="./2.jpg" className="w-100 img-responsive" alt="" />
        </Col>
      </Row>
    </Container>
  );
}
