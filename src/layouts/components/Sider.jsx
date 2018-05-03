import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
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
  renderMenu = () => (
    this.props.menuData.map((item) => {
      if (item.children) {
        return (
          <SubMenu
            key={item.key}
            title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}
          >
            {item.children.map(child => (
              <Menu.Item key={child.key}>
                <Link to={child.path} href={child.path}>
                  {child.name}
                </Link>
              </Menu.Item>
            ))}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={item.key}>
          <Icon type={item.icon} />
          <span>{item.name}</span>
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
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark"
    >
      {this.renderMenu()}
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
