import React, { Component } from 'react';
import './GlobalHeader.scss';

class GlobalHeader extends Component {
  render() {
    return (
      <div className="globalHeader">
        {this.props.children}
      </div>
    );
  }
}

export default GlobalHeader;
