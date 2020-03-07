import React, { Component } from 'react';
import { MDBCol, MDBFormInline, MDBBtn , MDBIcon ,MDBBadge, MDBContainer} from "mdbreact";
// import SimpleMap from './location'
import {Card ,Container ,Row ,Col} from 'react-bootstrap'
import './search.css'
import FlightInfo from './flightSchedulesinfo'
import axios from 'axios'

export default class Flightschedules extends Component {
  constructor(props) {
    super(props);
    this.state = {
        flight: {},
        airport:'',
        airline:'',
        airlines: [],
        laoding: false
    };
  }

  recordAirline(event){
    let info=event.target.value;
    // console.log(info)
    this.setState({airline: info})
}



  getInfo (){
    const apiKey ="6e8467-016c01";
    const cors ="https://cors-anywhere.herokuapp.com/"

    axios.get(cors+'http://aviation-edge.com/v2/public/timetable?key='+apiKey+'&iataCode='+this.state.airport+'&type=departure')
    .then(({ data }) => {
      console.log(data)
      this.setState({ flight: data })
    })
  }

  recordAirport(event){
    let info=event.target.value;
    console.log(info)
    this.setState({airport: info})
}

submitInfo(event){
    event.preventDefault() 
console.log('test')
this.getInfo ()

  
  }


  Airlines(){

    const apiKey ="6e8467-016c01";
    const cors ="https://cors-anywhere.herokuapp.com/"

    axios.get(cors+'https://aviation-edge.com/v2/public/airlineDatabase?key='+apiKey+'&codeIso2Country=US')
    .then(({ data }) => {
    //   console.log(data)

this.setState({ airlines: data })
    
    })


  }

  componentDidMount() {

   this.Airlines()
  }
  
  render() {
    return (

      <Container className="search">
      <Row>
      <Col xs={12} >
        {/* <div className='search'> */}
        <MDBCol md="12">
        <h1><MDBBadge color="light">Flight Schedules </MDBBadge></h1>
        <MDBFormInline className="md-form">
 
        <MDBIcon icon="search" />
            <input className="form-control mr-sm-4 w-75" type="text" placeholder="Search" aria-label="Search" onChange={(e)=> this.recordAirport(e)}/>
            <MDBBtn color="blue-grey" type="submit" className="mr-auto" onClick={(e)=>this.submitInfo(e)}>
              Search
            </MDBBtn>
          
            
          </MDBFormInline>
          </MDBCol>
          <FlightInfo info={this.state}/> 
        {/* </div> */}
        </Col>
        </Row>
        </Container>

  
          // value={this.state.airline}
          // onChange={(e)=> this.recordAirline(e)}
       
          // {this.state.airlines.map((airline)=><MenuItem value={airline.codeIcaoAirline}>{airline.nameAirline}</MenuItem> )}
          
    
    )
  }
  
}
