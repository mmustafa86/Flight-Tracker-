import React, { Component } from 'react';
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import SimpleMap from './location'
import './Marker.css'
import axios from 'axios'

export default class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        airport:'',
        location:''
    };
  }


  recordAirport(event){
    let info=event.target.value;
    console.log(info)
    this.setState({airport: info})
}

  getInfo() {
    const apiKey = "6e8467-016c01";
    const cors = "https://cors-anywhere.herokuapp.com/"

    axios.get(cors + 'https://aviation-edge.com/v2/public/airportDatabase?key=' + apiKey+'&codeIataAirport='+this.state.airport)
      .then(({ data }) => {
          console.log(data)
        this.setState({ location: data })
      })
  }
  submitInfo(event) {
    event.preventDefault()

    this.getInfo()


  }


  render() {
    return (
        <div className='search'>
        <MDBCol md="12">
          <MDBFormInline className="md-form mr-auto mb-4">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange={(e)=> this.recordAirport(e)}/>
            <MDBBtn gradient="aqua" rounded size="sm" type="submit" className="mr-auto" onClick={(e)=>this.submitInfo(e)}>
              Search
            </MDBBtn>
            {/* <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <MDBBtn outline color="warning" rounded size="sm" type="submit" className="mr-auto">
              Search
            </MDBBtn>
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <MDBBtn color="unique" rounded size="sm" type="submit" className="mr-auto">
              Search
            </MDBBtn> */}
          </MDBFormInline>
        </MDBCol>
        <SimpleMap info={this.state.location}/>
        </div>
    );
  }
}
