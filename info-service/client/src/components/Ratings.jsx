import React from 'react';

//the rating section that is located under the title section of the component
const Ratings = (props) => {
  return (
    <div> 
      <table style={{cellpadding: '50', marginTop: '15px', marginBottom: '15px', marginRight: '700px', marginLeft: '300px'}}>
        <tbody>
          <tr>
            <td><img src='https://toyotaescondido.files.wordpress.com/2012/04/5_stars1.jpg' style={{width: '80px', height: '20px'}}></img></td>
            <td style={{fontWeight: 'bold', fontSize: '14px', padding: '4px'}}>{props.restaurant.rating}</td>
            <td><img src='http://cdn.osxdaily.com/wp-content/uploads/2014/11/mac-messages-icon-300x276.jpg' style={{width: '20px', height: '20px'}}></img></td>
            <td style={{fontWeight: 'bold', fontSize: '14px', padding: '4px'}}>{props.restaurant.reviews} reviews</td>
            <td><img src='https://image.flaticon.com/icons/svg/631/631200.svg' style={{width: '20px', height: '20px'}}></img></td>
            <td style={{fontWeight: 'bold', fontSize: '14px', padding: '4px'}}>{props.restaurant.priceRange}</td>
            <td><img src='https://image.flaticon.com/icons/svg/0/97.svg' style={{width: '20px', height: '20px'}}></img></td>
            <td style={{fontWeight: 'bold', fontSize: '14px', padding: '4px'}}>{props.restaurant.cuisines}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Ratings;