import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sider from './Sider';
import Content from './Content';
import './BasicLayout.scss';

const propTypes = {
  contentClassName: PropTypes.string,
};

const defaultProps = {
  contentClassName: '',
};

class BasicLayout extends Component {
  render() {
    return (
      <div className="basicLayout">
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
