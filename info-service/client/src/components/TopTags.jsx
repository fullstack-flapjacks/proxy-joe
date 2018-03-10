import React from 'react';

//top tags section of the component 
const TopTags = (props) => {
  console.log('this is props', props.restaurant.topTags);
  return (
    <table className="TagRow" style={{marginTop: '15px', marginBottom: '15px', marginRight: '700px', marginLeft: '300px'}}> 
      <tbody>
        <tr>
          <td className="tags" style={{fontWeight: 'bold'}}>Top Tags:</td>
          {props.restaurant.topTags.map((tag, index) => {
            return <td key={index} style={{border: '1px solid black', backgroundClip: 'padding-box',
            borderRadius: '15px', padding: '6px', fontColor: 'grey', font: '14px arial'}}>{tag}</td>
          })}
        </tr>
      </tbody>
    </table>
  )
}

export default TopTags;
