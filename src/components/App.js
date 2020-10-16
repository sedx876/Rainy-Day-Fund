import React, {Component} from 'react';
import '../styles/App.css';
import Landing from './Landing'
import { Container, Row } from 'react-bootstrap';
import MenuBar from './MenuBar';

const App = ({children}) => {
  return (
      <Container id="App">
      <Row id='MenuBar'><MenuBar/></Row>
          <Row>
              {children}
          </Row>
      </Container>
  );
 }
export default App
