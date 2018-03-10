import React from 'react';

const Button = props => (
  <button className="menu-button" onClick={props.menuClick}>
    {props.menuName} Menu
  </button>
);

export default Button;
