import React, { Fragment } from 'react';
import { Card, Button, Container } from 'react-bootstrap'
import "./App.css"
function App() {
  return (
    <Container>
    <Fragment>
      <Card className="jino" variant="light">
        <Card.Header as="h1">World Bank Group</Card.Header>
      </Card>
      </Fragment>
      </Container>
  );
}

export default App;
