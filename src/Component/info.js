import React, { Component } from 'react';
import {Card,Button} from "react-bootstrap";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import axios from 'axios'

export default class info extends Component {
  constructor(props) {
    super(props);
    this.state = {
        flight: []
    };
  }
  componentDidMount() {
    const apiKey ="6e8467-016c01";
    const cors ="https://cors-anywhere.herokuapp.com/"

    axios.get(cors+'https://aviation-edge.com/v2/public/timetable?key='+apiKey+'&iataCode=&type=departure')
    .then(({ data }) => {
      console.log(data)
      this.setState({ flight: data })
    })
  }


  render() {
    return (
        
        <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
        <MDBTable>
      <MDBTableHead>
        <tr>
          <th>#</th>
          <th>First</th>
          <th>Last</th>
          <th>Handle</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
        </Card.Body>
        
      </Card> 
    );
  }
}
