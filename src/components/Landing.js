import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'

const Landing = () =>  {
    return (
        <Container id="Landing" className="container-fluid">
          <Jumbotron id="landing-jumbotron">
            <h1>Welcome to the Rainy Day Fund App</h1>
            <h6>This is a simple practice app and NOT financial advice. <strong>Illustrative purposes only!</strong></h6>
            <Button className="nav-btn">
            	<Link className="link" to="/what-is-a-rainy-day-fund">I understand - take me to the app</Link>
            </Button>
          </Jumbotron>
        </Container>
    );
}

export default Landing;