import React, { Component } from 'react';
import {Card,Button} from "react-bootstrap";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Select from '../Component/Select'


 const info = (props)=>{

const info= props.info.flight


console.log(info)

// function result(info){
    if(Object.keys(info).length !== 0){
    //   console.log(info)
  

 return (
       <div>
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

        </tr>
      </MDBTableHead>
      <MDBTableBody>

        {info.map((data ,index)=>{
            console.log(data)
            return (
            <tr>
          <td>{index}</td>
          <td>{data.aircraft.iataCode}</td>
          <td>{data.airline.icaoCode}</td>
          <td>{data.arrival.icaoCode}</td>
          <td>{data.departure.icaoCode}</td>
        </tr> 
            )
    })}
       

      </MDBTableBody>
    </MDBTable>
        </Card.Body>
        
      </Card> 
      </div> 
 );
}

return (
    <div></div>
)
 }

 

export default info;
