import React, { Component } from 'react';
import { Nav ,Navbar, Container} from 'react-bootstrap';

export default class footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Navbar fixed="bottom" >
   <footer>
       Footer
   </footer>
   </Navbar>
    );
  }
}
