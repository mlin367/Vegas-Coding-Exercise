import React from 'react';
import '../css/HotelList.css';

const HotelList = props => (
  <div className="hotelList">
    {props.hotels.map(hotel => (
      <div key={Math.random()} className="hotelListEntry">
        <span>{hotel.name}</span>
        <span>${hotel.price}</span>
      </div>
    ))}
  </div>
);

export default HotelList;