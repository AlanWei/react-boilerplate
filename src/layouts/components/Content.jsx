import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import GlobalHeader from './GlobalHeader';
import './Content.scss';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

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

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;
export default Content;
