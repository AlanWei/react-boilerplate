import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Sider from './components/Sider';
import Content from './components/Content';
import './BasicLayout.scss';

const propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
};

const defaultProps = {
  prefixCls: 'basicLayout',
  className: '',
  contentClassName: '',
};

class BasicLayout extends Component {
  render() {
    const classes = classnames({
      [this.props.prefixCls]: true,
      [this.props.className]: true,
    });
    return (
      <div className={classes}>
        <Sider />
        <Content className={this.props.contentClassName}>
          {this.props.children}
        </Content>
      </div>
    );
  }
}

BasicLayout.propTypes = propTypes;
BasicLayout.defaultProps = defaultProps;
export default BasicLayout;
