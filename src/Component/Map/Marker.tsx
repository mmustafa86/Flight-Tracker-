import React from 'react';
import './Marker.css';

const Marker = () => {
   
    return (
      <div>
        <div
          className="pin bounce"
          style={{ backgroundColor: 'blue', cursor: 'pointer' }}
          title={'name'}
        />
        <div className="pulse" />
      </div>
    );
  };

  export default Marker;