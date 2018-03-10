import React from 'react';

//title section of the component
const Title = (props) => {
  return (
    <div> 
      <h1 style={{marginTop: '15px', marginBottom: '15px', marginRight: '700px', marginLeft: '300px', borderBottom: '1px solid black'}}>{props.restaurant.name}</h1>
    </div>
  )
};


export default Title;
