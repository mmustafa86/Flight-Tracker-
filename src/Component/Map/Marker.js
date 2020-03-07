
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

import {Card ,Container ,Row ,Col} from 'react-bootstrap'
// import Marker from './Marker';
import './Marker.css'
const AnyReactComponent = ({text}) => <div>{text}</div>;

const SimpleMap = (props) => {
  console.log(props)
const info=props.info

const [center, setCenter] = useState({lat: info[0].latitudeAirport, lng: info[0].longitudeAirport });
const [zoom, setZoom] = useState(11);


const getMapOptions = (maps) => {
  return {
    disableDefaultUI: true,
    mapTypeControl: true,
    streetViewControl: true,
    styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
  };
};
    return (
      <div className='map'>
        <Container>
        <Row>
        <Col xs={12}>
      <Card className="text-center">
  {/* <Card.Header>Featured</Card.Header> */}

  <Card.Body>
    <Card.Title>{info[0].nameAirport}</Card.Title>
    <Card.Text>
      TimeZone:{info[0].timezone}
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
  <Card.Footer className="text-muted"></Card.Footer>

     
        <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC-9dWnwGFLEME5Iqv_3MpS7GUyDnLYTGg' }}
          center={center}
          zoom={zoom}
          options={getMapOptions}
        >
          <AnyReactComponent
            lat={info[0].latitudeAirport}
            lng={info[0].longitudeAirport}
            text={info[0].codeIataAirport}
            color="blue"
          />
        </GoogleMapReact>
        
      </div>
   
      </Card>
      </Col>
      </Row>
      </Container>
      </div>
    );
}


export default SimpleMap;