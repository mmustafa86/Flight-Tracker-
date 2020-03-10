import React, { Component } from 'react';
import './search.css'
import { MDBCol, MDBFormInline, MDBBtn , MDBIcon ,MDBBadge} from "mdbreact";
import {Container ,Row ,Col} from 'react-bootstrap'
import axios from 'axios'
import Flightinfo from './flightinfo'
// import MaterialUIPickers from './date'

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flight: {},
      airport: '',
      airline: '',
      flightnumber: '',
      loading: false,
      airlines: []


    };
  }

  recordAirport(event) {
    let info = event.target.value;
    console.log(info)
    this.setState({ airport: info })

  }

  recordAirline(event) {
    let info = event.target.value;
    console.log(info)
    this.setState({ airline: info })
  }


  recordFlightnumber(event) {
    let info = event.target.value;
    console.log(info)
    this.setState({ flightnumber: info })
  }



  getInfo() {
    const apiKey = "6e8467-016c01";
    const cors = "https://cors-anywhere.herokuapp.com/"

    axios.get(cors + 'http://aviation-edge.com/v2/public/flights?key=' + apiKey + '&arrIata=' + this.state.airport )
      .then(({ data }) => {
        //   console.log(data)
        this.setState({ flight: data })
      })
  }

  Airlines() {

    const apiKey = "6e8467-016c01";
    const cors = "https://cors-anywhere.herokuapp.com/"

    axios.get(cors + 'https://aviation-edge.com/v2/public/airlineDatabase?key=' + apiKey + '&codeIso2Country=US')
      .then(({ data }) => {
        console.log(data)

        this.setState({ airlines: data })

      })


  }
  componentDidMount() {

    this.Airlines()
  }



  submitInfo(event) {
    event.preventDefault()

    this.getInfo()


  }



  render() {
    // console.log(this.state.airports)
    return (
      <Container className="search">
      <Row>
      <Col xs={12} >
        {/* <div className='search'> */}
        <MDBCol md="12">
        <h1><MDBBadge color="light">Flight Route </MDBBadge></h1>
        <MDBFormInline className="md-form">
 
        <MDBIcon icon="search" />
            <input className="form-control mr-sm-4 w-75" type="text" placeholder="Search" aria-label="Search" onChange={(e)=> this.recordAirport(e)}/>
            <MDBBtn color="blue-grey" type="submit" className="mr-auto" onClick={(e)=>this.submitInfo(e)}>
              Search
            </MDBBtn>
          
            
          </MDBFormInline>
          </MDBCol>
          <Flightinfo info={this.state} />
        {/* </div> */}
        </Col>
        </Row>
        </Container>
      
    );
  }
}