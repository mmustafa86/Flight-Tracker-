import React from 'react';
import {Card} from "react-bootstrap";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import {Carousel ,Container, Row} from 'react-bootstrap'



 const info = (props)=>{

const info= props.info.flight


console.log(info)

// function result(info){
    if(Object.keys(info).length !== 0){
    //   console.log(info)
  

 return (
       <div>
       <Container>
        <Card className="text-center">
        <Card.Header>Result</Card.Header>
        <Card.Body>
        <MDBTable>
      <MDBTableHead>
        <tr>
          <th>#</th>
          <th>AirCraft</th>
          <th>Airline</th>
          <th>Arrival</th>
          <th>Departure</th>
          <th>Flight Number</th>
         <th>Status</th>

        </tr>
      </MDBTableHead>
      <MDBTableBody>

        {info.map((data ,index)=>{
            console.log(data)
            return (
            <tr>
          <td key={index}>{index}</td>
          <td>{data.aircraft.iataCode}</td>
          <td>{data.airline.icaoCode}</td>
          <td>{data.arrival.icaoCode}</td>
          <td>{data.departure.icaoCode}</td>
          <td>{data.flight.iataNumber}</td>
          <td>{data.status}</td>
        </tr> 
            )
    })}
       

      </MDBTableBody>
    </MDBTable>
        </Card.Body>
        
      </Card> 
      </Container>
      </div> 
 );
}

return (
    <div></div>
)
 }

 

export default info;
