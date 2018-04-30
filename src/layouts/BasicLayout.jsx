import React, { Component } from 'react';
import Sider from './Sider';
import './BasicLayout.scss';

class BasicLayout extends Component {
  render() {
    return (
      <div className="basicLayout">
        <Sider />
        <div className="mainContent">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default BasicLayout;
