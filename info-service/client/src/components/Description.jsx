import React from 'react';

//description section of the component
const Description = (props) => {
  let less = props.restaurant.description;
  let more = props.restaurant.description + props.restaurant.description;

  if (props.toggled === true) {
    return (
      <div style={{marginTop: '15px', marginBottom: '15px', marginRight: '700px', marginLeft: '300px', font: 'arial'}}>
        {more}<br></br><button style={{color: 'red', border: 'none', padding: '0', background: 'none'}} onClick={props.readLess}>- Read less</button>
      </div>
    )
  }
  else if (props.toggled === false) {
    return (
      <div style={{marginTop: '15px', marginBottom: '15px', marginRight: '700px', marginLeft: '300px', font: 'arial'}}>
        {less}<br></br><button style={{color: 'red', border: 'none', padding: '0', background: 'none'}} onClick={props.readMore}>+ Read more</button>
      </div>
    )
  }
}

export default Description;