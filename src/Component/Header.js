import React, { Component } from 'react';
import { Nav ,Navbar, Container} from 'react-bootstrap';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return ( 
      <Navbar bg="light">
      <Navbar.Brand href="#home">Flight App</Navbar.Brand>
    </Navbar>



    );
  }
}
