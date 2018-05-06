import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './GlobalFooter.scss';

const propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
};

const defaultProps = {
  prefixCls: 'globalFooter',
  className: '',
};

class GlobalFooter extends Component {
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

GlobalFooter.propTypes = propTypes;
GlobalFooter.defaultProps = defaultProps;
export default GlobalFooter;
