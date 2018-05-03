import React, { Component } from 'react';
import GlobalHeader from './GlobalHeader';
import './Content.scss';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <GlobalHeader>
          <div />
        </GlobalHeader>
        <div className="mainContent">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Content;
