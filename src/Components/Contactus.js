import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import "../styles.css";
function Contact() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleOpen = () => {
    setShow(true);
  };
  return (
    <>
      {show && (
        <Modal.Dialog className="modal-dialogue">
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>We will get back to you soon</p>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.handleClose} variant="secondary">
              Close
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      )}
      <Container style={{ marginTop: "40px" }}>
        <Row>
          <Col md={12}>
            <h1>LET US KNOW YOUR THOUGHTS</h1>
            <h2>SEND YOUR QUERIES</h2>
          </Col>
        </Row>
        <Row>
          <Col md={4} />
          <Col md={4}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Terms and Conditions" />
              </Form.Group>
              <Button variant="primary" onClick={this.handleOpen}>
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={4} />
        </Row>
      </Container>
    </>
  );
}

export default Contact;
