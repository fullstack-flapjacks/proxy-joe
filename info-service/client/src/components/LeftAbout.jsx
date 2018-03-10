import React from 'react';
//left column in the about section of the component
const LeftAbout = (props) => (
  <span>
    <p className="diningStyle" style={{fontWeight: 'bold', fontSize: '14px'}}><img src='https://image.flaticon.com/icons/svg/701/701965.svg' style={{width: '20px', height: '20px'}}></img> Dining Style</p>
    <p style={{fontSize: '14px', marginLeft: '1.7em'}}>{props.restaurant.diningStyle}</p>
    <p className="cuisine" style={{fontWeight: 'bold', fontSize: '14px'}}><img src='https://image.flaticon.com/icons/svg/0/97.svg' style={{width: '20px', height: '20px'}}></img> Cuisine</p>
    <p style={{fontSize: '14px', marginLeft: '1.7em'}}>{props.restaurant.cuisines}</p>
    <p className="hoursOfOperations" style={{fontWeight: 'bold', fontSize: '14px'}}><img src='https://image.flaticon.com/icons/svg/59/59252.svg' style={{width: '20px', height: '20px'}}></img> Hours of Operation</p>
    <p className="monday" style={{fontSize: '14px', marginLeft: '1.7em'}}>Monday - Thursday</p>
    <p style={{fontSize: '14px', marginLeft: '1.7em'}}>Lunch: {props.restaurant.hoursOfOperations.monday.lunch}</p>
    <p style={{fontSize: '14px', marginLeft: '1.7em'}}>Dinner: {props.restaurant.hoursOfOperations.monday.dinner}</p>
    <p className="friday" style={{fontSize: '14px', marginLeft: '1.7em'}}>Friday</p>
    <p style={{fontSize: '14px', marginLeft: '1.7em'}}>Lunch: {props.restaurant.hoursOfOperations.friday.lunch}</p>
    <p style={{fontSize: '14px', marginLeft: '1.7em'}}>Dinner: {props.restaurant.hoursOfOperations.friday.dinner}</p>
    <p className="saturday" style={{fontSize: '14px', marginLeft: '1.7em'}}>Saturday</p>
    <p style={{fontSize: '14px', marginLeft: '1.7em'}}>Lunch: {props.restaurant.hoursOfOperations.saturday.lunch}</p>
    <p style={{fontSize: '14px', marginLeft: '1.7em'}}>Dinner:{props.restaurant.hoursOfOperations.saturday.dinner}</p>
    <p className="phone" style={{fontWeight: 'bold', fontSize: '14px'}}><img src='https://image.flaticon.com/icons/svg/684/684812.svg' style={{width: '20px', height: '20px'}}></img> Phone Number</p>
    <p style={{fontSize: '14px', marginLeft: '1.7em'}}>{props.restaurant.phoneNumber}</p>
    <p className="website" style={{fontWeight: 'bold', fontSize: '14px'}}><img src='https://image.flaticon.com/icons/svg/109/109476.svg' style={{width: '20px', height: '20px'}}></img> Website</p>
    <p style={{fontSize: '14px', marginLeft: '1.7em'}}><a href={props.restaurant.website} style={{color: 'red'}}>{props.restaurant.website}</a></p>
    <p className="payment" style={{fontWeight: 'bold', fontSize: '14px'}}><img src='https://image.flaticon.com/icons/svg/271/271035.svg' style={{width: '20px', height: '20px'}}></img> Payment</p>
    <p style={{fontSize: '14px', marginLeft: '1.7em'}}>AMEX, Visa, Discover, Master</p>
    <p className="dressCode" style={{fontWeight: 'bold', fontSize: '14px'}}><img src='https://image.flaticon.com/icons/svg/141/141585.svg' style={{width: '20px', height: '20px'}}></img> Dress Code</p>
    <p style={{fontSize: '14px', marginLeft: '1.7em'}}>{props.restaurant.dressCode}</p>
    <p className="chef" style={{fontWeight: 'bold', fontSize: '14px'}}><img src='https://image.flaticon.com/icons/svg/129/129226.svg' style={{width: '20px', height: '20px'}}></img> Executive Chef</p>
    <p style={{fontSize: '14px', marginLeft: '1.7em'}}>{props.restaurant.executiveChef}</p>
  </span>
);

export default LeftAbout;