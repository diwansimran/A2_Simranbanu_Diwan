import React, { Component } from "react";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import landingimg from '../../images/landingpage_sub.jpg';
import landingimgmain from '../../images/landing.jpg';
import css from '../../css/landing.css'

class Home extends Component {
  render() {
    return (
      <Container fluid>
      <Row>
        <Col md={12}>
          <img
          src={landingimgmain}
          alt="loading"
          class="coverimg"
         />
        </Col>
      </Row>
      <Row >
        <Col className="col-md-6">
        <Card style={{ width: '100%', border:'none' }}>
          <Card.Body>
          <Card.Title>Find the best place to live!</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id nulla vel leo venenatis bibendum et eget metus. Suspendisse quis viverra tortor. In eget nisl arcu. Nunc ac cursus purus, eget molestie mi. Pellentesque vel porttitor ligula, in lacinia lacus. Sed tincidunt, ex at facilisis fringilla, erat leo efficitur tortor, eu iaculis enim diam eu orci. Suspendisse quis est erat. Nullam tempor felis magna, et pharetra libero hendrerit ut. Proin vehicula sit amet sem non cursus. Integer cursus, odio venenatis condimentum hendrerit, felis est efficitur tortor, a varius tellus eros at odio. Fusce ornare interdum lacus id scelerisque.
         </Card.Text>
           <Button variant="primary" onClick={() => alert('It will be redirected to detailed section')}>View More</Button>
          </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
        <img
          src={landingimg}
          alt="loading"
          class="landingimage"
        />
        </Col>
      </Row>
      <Row>
      <Col className="col-md-6">
        <Card style={{ width: '100%', border:'none' }}>
          <Card.Body>
          <Card.Title>One month free on your first booking!</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id nulla vel leo venenatis bibendum et eget metus. Suspendisse quis viverra tortor. In eget nisl arcu. Nunc ac cursus purus, eget molestie mi. Pellentesque vel porttitor ligula, in lacinia lacus. Sed tincidunt, ex at facilisis fringilla, erat leo efficitur tortor, eu iaculis enim diam eu orci. Suspendisse quis est erat. Nullam tempor felis magna, et pharetra libero hendrerit ut. Proin vehicula sit amet sem non cursus. Integer cursus, odio venenatis condimentum hendrerit, felis est efficitur tortor, a varius tellus eros at odio. Fusce ornare interdum lacus id scelerisque.
         </Card.Text>
           <Button variant="primary" onClick={() => alert('It will be redirected to detailed section')}>View More</Button>
          </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
        <img
          src={landingimg}
          alt="loading"
          class="landingimage"
        />
        </Col>
      </Row>
  </Container>
    )
  }
}
 
export default Home;
