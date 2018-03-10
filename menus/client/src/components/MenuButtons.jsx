import React from 'react';
import Button from './Button';

class MenuButtons extends React.Component {
  constructor(props) {
    super(props);
    this.handleMenuClick.bind(this);
  }

  handleMenuClick(menu) {
    this.props.menuClick(menu);
  }

  render() {
    return (
      <div>
        {this.props.menuNames.map(menuName => (
          <Button
            menuClick={() => this.handleMenuClick(menuName)}
            menuName={menuName}
          />
        ))}
      </div>
    );
  }
}

export default MenuButtons;
