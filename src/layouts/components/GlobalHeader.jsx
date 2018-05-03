import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './GlobalHeader.scss';

const propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
};

const defaultProps = {
  prefixCls: 'globalHeader',
  className: '',
};

class GlobalHeader extends Component {
  render() {
    const classes = classnames({
      [this.props.prefixCls]: true,
      [this.props.className]: true,
    });
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}

GlobalHeader.propTypes = propTypes;
GlobalHeader.defaultProps = defaultProps;
export default GlobalHeader;
