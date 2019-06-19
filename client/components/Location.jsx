import React from 'react';
import '../css/Location.css'

const Location = props => (
  <div className="locationClass">
    <span>{props.address}</span>
    <img src={props.map}></img>
  </div>
);

export default Location;