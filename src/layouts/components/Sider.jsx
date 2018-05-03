import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Sider.scss';

const propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  renderSiderHeader: PropTypes.func,
  renderSiderBody: PropTypes.func,
};

const defaultProps = {
  prefixCls: 'sider',
  className: '',
  renderSiderHeader: () => (<div />),
  renderSiderBody: () => (<div />),
};

class Sider extends Component {
  render() {
    const { prefixCls, className } = this.props;
    const classes = classnames({
      [prefixCls]: true,
      [className]: true,
    });
    return (
      <div className={classes}>
        <div className={`${prefixCls}-header`}>
          {this.props.renderSiderHeader()}
        </div>
        <div className={`${prefixCls}-body`}>
          {this.props.renderSiderBody()}
        </div>
      </div>
    );
  }
}

Sider.propTypes = propTypes;
Sider.defaultProps = defaultProps;
export default Sider;
