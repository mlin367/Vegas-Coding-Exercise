import React from 'react';

const HotelList = props => (
  <div className="hotelList">
    {props.hotels.map(hotel => (
      <div className="hotelListEntry">
        <span>{hotel.name}</span>
        <span>{hotel.price}</span>
      </div>
    ))}
  </div>
);

export default HotelList;