import React from 'react';

const Location = props => (
  <div className="locationClass">
    <span>{props.address}</span>
    <img src={props.map}></img>
  </div>
);

export default Location;