import React, { Component } from 'react';
import { Form ,FormControl,Button} from "react-bootstrap";
import '../Component/search.css'
// import {DatePicker ,HelpBlock ,ControlLabel} from "react-bootstrap-date-picker"
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
  <Form.Row>
    <Form.Group controlId="formGridCity">
      <Form.Label>From</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group  controlId="formGridState">
      <Form.Label>Airlines</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group  controlId="formGridZip">
      <Form.Label>To</Form.Label>
      <Form.Control />
    </Form.Group>
    <Form.Group ontrolId="formGridPassword">
      <Form.Label>Date</Form.Label>
      <Form.Control type="date" placeholder="Date" />
    </Form.Group>
  </Form.Row>

  {/* <Button variant="primary" type="submit">
    Submit
  </Button> */}
</Form>
      
      </div>
    );
  }
}
