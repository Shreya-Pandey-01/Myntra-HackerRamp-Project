import React from 'react';
import { Col,Card,Row ,Form } from 'react-bootstrap';
import stylefeed from '../data/StyleFeed';
import './StyleFeed.css'; 

export default function StyleFeed() {
 
  const handleSubmit = (event) => {
    event.preventDefault(); 
 
    console.log('Form submitted!');
  };

  return (
    <>
    <div className="styleFeedContainer">
      <h1 className="pageTitle">Explore the Hottest Trends with Myntra's Style Feed</h1>

      <Row xs={1} md={2} lg={3}>
        {stylefeed.map((item, index) => (
          <ItemCard item={item} key={index} />
        ))}
      </Row>

      <div className="filters">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Filter by Category:</Form.Label>
            <Form.Control as="select">
              <option>All</option>
              <option>Tops</option>
              <option>Dresses</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    </div>
    </>
  );
}


function ItemCard({ item }) {
  return (
    <Col className="mb-4">
      <Card className="itemCard">
        <div className="imgContainer">
          <Card.Img variant="top" src={item.image} className="imgTag" />
        </div>
        {/* <Card.Body className="cardBody">
          <p className="itemTitle">{item.title}</p>
          <div className="review">
            <span>Rating&nbsp;<i>{item.rating.rate}</i></span>
            <span>Price&nbsp;&#8377;<i>{item.price}</i></span>
          </div>
        </Card.Body> */}
      </Card>
    </Col>
  );
}
