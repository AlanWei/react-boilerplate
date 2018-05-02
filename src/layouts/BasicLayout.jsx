import React, { Component } from 'react';
import Sider from './Sider';
import Content from './Content';
import './BasicLayout.scss';

class BasicLayout extends Component {
  render() {
    return (
      <div className="basicLayout">
        <Sider />
        <Content />
      </div>
    );
  }
}

export default BasicLayout;
