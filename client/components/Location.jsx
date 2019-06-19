import React from 'react';
import '../css/Location.css'

const Location = props => (
  <div className="locationClass">
    <span>{props.address}</span>
    <img className="map" src={props.map}></img>
  </div>
);

export default Location;