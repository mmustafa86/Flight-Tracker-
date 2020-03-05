import React, { Component } from 'react';

import {Carousel ,Container, Row} from 'react-bootstrap'


export default class slides extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container>
        <Row>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.insider.com/5b3a5d7cd00a5c24008b46b1?width=1100&format=jpeg&auto=webp"
            alt="First slide"
            width="500" height="600"
          />
          <Carousel.Caption>
            <h3>Check Your Route</h3>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.discoverlosangeles.com/sites/default/files/styles/hero/public/images/2019-01/LAX%20Aerial%20View.jpg?itok=HClwf4lb"
            alt="Third slide"
            width="500" height="600"
          />
      
          <Carousel.Caption>
            <h3>Check The Fight Time</h3>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.gannett-cdn.com/presto/2019/08/07/USAT/7bf65799-32b9-415a-be93-3e6a8ec46db7-GettyImages-1080085940.jpg?width=2560"
            alt="Third slide"
            width="500" height="600"
          />
      
          <Carousel.Caption>
            <h3>Check the Flight Number </h3>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Row>
      </Container>
    );
  }
}


