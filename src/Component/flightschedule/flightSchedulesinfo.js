import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Card } from "react-bootstrap";


const DatatablePage = (props) => {
  const info = props.info.flight
  console.log(info)

  if (Object.keys(info).length !== 0) {
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
                    <th>Airline</th>
                    <th>Arrival Time</th>
                    <th>Arrival Gate</th>
                    <th>Departure Time</th>
                    <th>Departure Gate</th>
                    <th>Flight Number</th>
                    <th>Status</th>

                  </tr>
                </MDBTableHead>
                <MDBTableBody>


                  {info.map((data, index) => {
                    console.log(data)
                    return (
                      <tr>
                        <td key={index}>{index}</td>
                        <td>{data.airline.name}</td>
                        <td>{data.arrival.estimatedTime}</td>
                        <td>{data.arrival.gate}</td>
                        <td>{data.departure.estimatedTime}</td>
                        <td>{data.departure.gate}</td>
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
    <div> .</div>
  )

}

export default DatatablePage;