import React, { Component } from 'react';
import Test from './Test';
import { Container, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
        <div>
          <Container>
            <Row className="show-grid">
              <Col xs={12} md={8}>
              <div style = {styles.starStyles}>
                This is my first column

              </div>
                 
              </Col>
              <Col xs={6} md={4}>
                  This is my second column
              </Col>

              <ButtonToolbar>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="info">Info</Button>
                <Button variant="light">Light</Button>
                <Button variant="dark">Dark</Button>
                <Button variant="link">Link</Button>
            </ButtonToolbar>;
            </Row>
          </Container>
          {/* <Test /> */}

        </div>
    

    );
  }
}

const styles = {
  starStyles: {
    color: "orange",
    backgroundColor: "green"
  }
}

export default App;
