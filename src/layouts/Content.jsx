import React, { Component } from 'react';
import classnames from 'classnames';
import GlobalHeader from './GlobalHeader';
import './Content.scss';

class Content extends Component {
  render() {
    const mainContentClasses = classnames({
      mainContent: true,
      [this.props.className]: true,
    });

    return (
      <div className="content">
        <GlobalHeader>
          <div />
        </GlobalHeader>
        <div className={mainContentClasses}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Content;
