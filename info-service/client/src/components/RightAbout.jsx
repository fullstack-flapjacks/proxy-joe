import React from 'react';
import Maps from './Map.jsx';

//right column in the about section of the component
const RightAbout = (props) => (
  <span>
    <p style={{fontSize: '14px'}}><img src='https://image.flaticon.com/icons/svg/149/149441.svg' style={{width: '20px', height: '20px'}}></img> <a href={props.restaurant.neighborhood} style={{color: 'red'}}>{props.restaurant.neighborhood}</a></p>
    <p className="neighborhood" style={{fontWeight: 'bold', fontSize: '14px'}}><img src='https://image.flaticon.com/icons/svg/160/160268.svg' style={{width: '20px', height: '20px'}}></img> Neighborhood</p>
    <p style={{fontSize: '14px', marginLeft: '1.7em'}}>{props.restaurant.neighborhood}</p>
    <p className="crossStreet" style={{fontWeight: 'bold', fontSize: '14px'}}><img src='https://image.flaticon.com/icons/svg/160/160260.svg' style={{width: '20px', height: '20px'}}></img> Cross Street</p>
    <p style={{fontSize: '14px', marginLeft: '1.7em'}}>{props.restaurant.crossStreet}</p>
    <p className="parking" style={{fontWeight: 'bold', fontSize: '14px'}}><img src='https://image.flaticon.com/icons/svg/62/62820.svg' style={{width: '20px', height: '20px'}}></img> Parking</p>
    <p style={{fontSize: '14px', marginLeft: '1.7em'}}>{props.restaurant.parking}</p>
    <p className="additional" style={{fontWeight: 'bold', fontSize: '14px'}}><img src='https://image.flaticon.com/icons/svg/149/149397.svg' style={{width: '20px', height: '20px'}}></img> Additional</p>
    <p style={{fontSize: '14px', marginLeft: '1.7em'}}>{props.restaurant.additional.description}</p>
  </span>
);

export default RightAbout;

{/* <Maps item={props}/> */}