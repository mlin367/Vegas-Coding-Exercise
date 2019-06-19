import React from 'react';
import '../css/Header.css';

const Header = props => (
  <div className="header">
    <div className="headerWrapping0">
      <div className="headerWrapping">
        <div className="headerWrapping1">
          <h1>{props.hotel.name}</h1>
          <div>{props.hotel.rating}</div>
        </div>
        <div className="headerWrapping2">
          <span onClick={props.onTabClick} id="location">Strip</span>
          <span>{props.hotel.phoneNumber}</span>
          <span>Best Price Guarantee</span>
        </div>
      </div>
      <div className="priceWrapper">
        <span className="price">{props.hotel.price}</span>
        <span>HOTEL ROOMS FROM</span>
      </div>
    </div>
    <div className="tabs">
      <div onClick={props.onTabClick} id="description" className={`description ${props.view === 'description' ? 'focus' : 'null'}`}>DESCRIPTION</div>
      <div onClick={props.onTabClick} id="details" className={`details ${props.view === 'details' ? 'focus' : 'null'}`}>DETAILS</div>
      <div onClick={props.onTabClick} id="location" className={`location ${props.view === 'location' ? 'focus' : 'null'}`}>LOCATION</div>
    </div>
  </div>
);

export default Header;
