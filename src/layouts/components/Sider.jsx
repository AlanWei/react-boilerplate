import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import map from 'lodash/map';
import get from 'lodash/get';
import logo from 'assets/logo.svg';
import './Sider.scss';

const { SubMenu } = Menu;

const propTypes = {
  prefixCls: PropTypes.string,
  className: PropTypes.string,
  appName: PropTypes.string,
  menuData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
    icon: PropTypes.string,
    children: PropTypes.array,
  })),
};

const defaultProps = {
  prefixCls: 'sider',
  className: '',
  appName: '',
  menuData: [],
};

class Sider extends Component {
  renderMenu = data => (
    map(data, (item) => {
      if (item.children) {
        return (
          <SubMenu
            key={item.path}
            title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}
          >
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={item.path}>
          <Link
            to={item.path}
            href={item.path}
          >
            <Icon type={item.icon} />
            <span>{item.name}</span>
          </Link>
        </Menu.Item>
      );
    })
  )

  renderSiderHeader = () => (
    <Link to="/" href="/">
      <div className={`${this.props.prefixCls}-header`}>
        <img
          className={`${this.props.prefixCls}-logo`}
          src={logo}
          alt="logo"
        />
        <div className={`${this.props.prefixCls}-appName`}>
          {this.props.appName}
        </div>
      </div>
    </Link>
  )

  renderSiderBody = () => (
    <Menu
      defaultOpenKeys={[get(this.props, 'menuData[0].path', '')]}
      mode="inline"
      theme="dark"
    >
      {this.renderMenu(this.props.menuData)}
    </Menu>
  )

  render() {
    const { prefixCls, className } = this.props;
    const classes = classnames({
      [prefixCls]: true,
      [className]: true,
    });
    return (
      <div className={classes}>
        {this.renderSiderHeader()}
        <div className={`${prefixCls}-body`}>
          {this.renderSiderBody()}
        </div>
      </div>
    );
  }
}

Sider.propTypes = propTypes;
Sider.defaultProps = defaultProps;
export default Sider;
