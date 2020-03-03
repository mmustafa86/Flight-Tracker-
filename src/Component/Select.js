import React, { Component } from 'react';
import { Form ,FormControl,Button} from "react-bootstrap";
import '../Component/search.css'
// import {DatePicker ,HelpBlock ,ControlLabel} from "react-bootstrap-date-picker"
import axios from 'axios'
import Info from '../Component/info'
import MaterialUIPickers from '../Component/date'
export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
        flight: []
    };
  }

  recordState(event){
      let info=event.target.value;
      console.log(info)
  }


  getInfo (){
    const apiKey ="6e8467-016c01";
    const cors ="https://cors-anywhere.herokuapp.com/"

    axios.get(cors+'http://aviation-edge.com/v2/public/flights?key='+apiKey+'&arrIata=IAH')
    .then(({ data }) => {
      console.log(data)
      this.setState({ flight: data })
    })
  }

  submitInfo(event){
    event.preventDefault() 
this.getInfo ()
  
  }

  render() {
    console.log(this.state)
    return (
        <div className="Search">
   <Form>
   <h4>Check Flight Satus</h4>
  <Form.Row>
  
    <Form.Group >
      <Form.Label>From</Form.Label>
      <Form.Control onChange={(e)=> this.recordState(e)}/>
    </Form.Group>

    <Form.Group  >
      <Form.Label>Airport</Form.Label>
      <Form.Control as="select" onChange={(e)=> this.recordState(e)}>
        <option>Choose...</option>
        <option>IAH</option>
      </Form.Control>
    </Form.Group>

    <Form.Group  >
      <Form.Label>Airlines</Form.Label>
      <Form.Control as="select" onChange={(e)=> this.recordState(e)}>
        <option>Choose...</option>
        <option>UNITED</option>
      </Form.Control>
    </Form.Group>
    <Form.Group  >
      <Form.Label>To</Form.Label>
      <Form.Control onChange={(e)=> this.recordState(e)}/>
    </Form.Group>
    <Form.Group >
      <Form.Label>Date</Form.Label>
      <Form.Control type="date" placeholder="Date" onChange={(e)=> this.recordState(e)}/>
      
    </Form.Group>
  
  </Form.Row>

  <Button variant="primary" type="submit" onClick={(e)=>this.submitInfo(e)}>Search</Button>
    {/* <MaterialUIPickers /> */}
</Form>
    
      </div>
    );
  }
}
