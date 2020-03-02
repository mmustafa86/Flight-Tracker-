import React, { Component } from 'react';
import { Form ,FormControl,Button} from "react-bootstrap";
import '../Component/search.css'
// import {DatePicker ,HelpBlock ,ControlLabel} from "react-bootstrap-date-picker"

import MaterialUIPickers from '../Component/date'
export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      let Col=''
    return (
        <div className="Search">
   <Form>
   <h4>Check Flight Satus</h4>
  <Form.Row>
  
    <Form.Group >
      <Form.Label>From</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group  >
      <Form.Label>Airport</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>IAH</option>
      </Form.Control>
    </Form.Group>

    <Form.Group  >
      <Form.Label>Airlines</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>UNITED</option>
      </Form.Control>
    </Form.Group>
    <Form.Group  >
      <Form.Label>To</Form.Label>
      <Form.Control />
    </Form.Group>
    <Form.Group >
      <Form.Label>Date</Form.Label>
      <Form.Control type="date" placeholder="Date" />
      
    </Form.Group>
    <Button variant="primary" type="submit">Search</Button>
    <MaterialUIPickers/>
  </Form.Row>

 
</Form>
      
      </div>
    );
  }
}
