import React from 'react';
import Iframe from 'react-iframe';
//map section of the component that is located above the right column section 
const Maps = (props) => {
  return (
    <span>
      <iframe src={props.restaurant.map}></iframe>
    </span>
  )
};

export default Maps;

// <ul>{props.item.restaurant.latitude}</ul>
// <ul>{props.item.restaurant.longitude}</ul>
{/* <iframe src={props.restaurant.map}></iframe> */}