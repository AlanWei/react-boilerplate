import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Sider.scss';

const propTypes = {
  prefixCls: PropTypes.string,
  appName: PropTypes.string,
  renderSiderBody: PropTypes.func,
};

const defaultProps = {
  prefixCls: 'sider',
  appName: 'React App',
  renderSiderBody: () => (<div />),
};

class Sider extends Component {
  render() {
    const { prefixCls } = this.props;
    return (
      <div className={prefixCls}>
        <div className={`${prefixCls}-header`}>
          <div className={`${prefixCls}-header-appName-placeholder`}>
            {this.props.appName}
          </div>
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
