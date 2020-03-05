import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";
import Slide from './slides'

const JumbotronPage = () => {
  return (
      <div>
    <MDBJumbotron fluid>
      <MDBContainer>
        <h2 className="display-4">Welcome to The Flight Tracker App</h2>
        <p className="lead"></p>
      </MDBContainer>
    </MDBJumbotron>

    <Slide/>
   
    </div>
  )
}

export default JumbotronPage;