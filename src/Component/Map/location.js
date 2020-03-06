import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Carousel ,Container, Row} from 'react-bootstrap'
import './Marker.css'

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const SimpleMap= (props)=> {

const info=props.info
console.log(info)
   
if(Object.keys(info).length !== 0){
    const lat= info[0].latitudeAirport
    const lng= info[0].longitudeAirport
let data = {
    //   console.log(this.props.center)
    center: {
      lat: lat,
      lng: lng
    }
}
    //   console.log(lat.info)
    return (

      // Important! Always set the container height explicitly
      <div className='map'>
      <div  style={{ height: '50vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC-9dWnwGFLEME5Iqv_3MpS7GUyDnLYTGg'}}
          defaultCenter={data.center}
          defaultZoom={11}
        >
          <AnyReactComponent
            lat={lat}
            lng={lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
      </div>
    );
    }
    return <div></div>
}

export default SimpleMap;
