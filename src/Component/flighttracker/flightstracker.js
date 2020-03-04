import React, { Component } from 'react';
import { Form ,Button} from "react-bootstrap";
import './search.css'
// import {DatePicker ,HelpBlock ,ControlLabel} from "react-bootstrap-date-picker"
import axios from 'axios'
import Flightinfo from './flightinfo'
// import MaterialUIPickers from './date'

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
        flight: {},
        airport:'',
        airline:'',
        flightnumber:'',
        airlines:[]

    };
  }

  recordAirport(event){
      let info=event.target.value;
      console.log(info)
    this.setState({airport: info})
      
  }

  recordAirline(event){
    let info=event.target.value;
    console.log(info)
    this.setState({airline: info})
}


recordFlightnumber(event){
  let info=event.target.value;
  console.log(info)
  this.setState({flightnumber: info})
}



  getInfo (){
    const apiKey ="6e8467-016c01";
    const cors ="https://cors-anywhere.herokuapp.com/"

    axios.get(cors+'http://aviation-edge.com/v2/public/flights?key='+apiKey+'&arrIata='+this.state.airport+'&airlineIcao='+this.state.airline)
    .then(({ data }) => {
    //   console.log(data)
      this.setState({ flight: data })
    })
  }

  Airlines(){

    const apiKey ="6e8467-016c01";
    const cors ="https://cors-anywhere.herokuapp.com/"

    axios.get(cors+'https://aviation-edge.com/v2/public/airlineDatabase?key='+apiKey+'&codeIso2Country=US')
    .then(({ data }) => {
      console.log(data)

this.setState({ airlines: data })
    
    })


  }
  componentDidMount() {

   this.Airlines()
  }



  submitInfo(event){
    event.preventDefault() 

this.getInfo ()

  
  }

  

  render() {
    // console.log(this.state.airports)
    return (
        <div>
        <div className="Search">
        
   <Form>
   <h4>Check Flight Satus</h4>
  <Form.Row>
{/*   
    <Form.Group >
      <Form.Label>From</Form.Label>
      <Form.Control onChange={(e)=> this.recordState(e)}/>
    </Form.Group> */}

    <Form.Group  >
      <Form.Label>Airport</Form.Label>
      <Form.Control as="select" onChange={(e)=> this.recordAirport(e)}>
        <option>Choose...</option>
        {/* {this.state.airports.map((airport)=><option value={airport.codeIataAirport}>{airport.nameAirport}</option> )} */}
        <option value="iah">Houston</option>
      </Form.Control>
    </Form.Group>

    <Form.Group  >
      <Form.Label>Airlines</Form.Label>
      <Form.Control as="select" onChange={(e)=> this.recordAirline(e)}>
        <option>Choose...</option>
     {this.state.airlines.map((airline)=><option value={airline.codeIcaoAirline}>{airline.nameAirline}</option> )}
      </Form.Control>
    </Form.Group>
    {/* <Form.Group  >
      <Form.Label>Flight Number</Form.Label>
      <Form.Control onChange={(e)=> this.recordFlightnumber(e)}/>
    </Form.Group> */}
    {/* <Form.Group >
      <Form.Label>Date</Form.Label>
      <Form.Control type="date" placeholder="Date" onChange={(e)=> this.recordState(e)}/>
      
    </Form.Group>
   */}
  </Form.Row>

  <Button variant="primary" type="submit" onClick={(e)=>this.submitInfo(e)}>Search</Button>
    {/* <MaterialUIPickers /> */}
</Form>
   
      </div>
      <Flightinfo info={this.state}/>
      </div>
    );
  }
}