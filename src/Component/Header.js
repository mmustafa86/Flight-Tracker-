import React, { Component } from 'react';
import { Nav ,Navbar, Form ,FormControl ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return ( 
    
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home"><Link to="/">Flights Tracker App</Link></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home"><Link to="/flightstracker">Flight Tracker</Link></Nav.Link>
      <Nav.Link href="#features">Flight schedules </Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form> */}
  </Navbar>

    );
  }
}