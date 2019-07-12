import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function NoMatch() {
  return(
    <>
      <Container className="text-center">
        <Row>
          <Col>
            <h1>Oops, Page not found.</h1>
            <Link to="/">Go back to home.</Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NoMatch;
