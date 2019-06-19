import React from 'react';
import '../css/Location.css';

const Location = props => (
  <div className="locationClass">
    <div>
      <i class="fas fa-map-marker-alt fa-sm"></i>
      <span className="locationSpan">{props.address}</span>
    </div>
    <img className="map" src={props.map}></img>
  </div>
);

export default Location;
