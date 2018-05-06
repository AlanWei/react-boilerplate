import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import map from 'lodash/map';
import getFlatMenuKeys from 'utils/getFlatMenuKeys';
import getMeunMatchKeys from 'utils/getMeunMatchKeys';
import urlToList from 'utils/urlToList';
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
  location: PropTypes.object.isRequired,
};

const defaultProps = {
  prefixCls: 'sider',
  className: '',
  appName: '',
  menuData: [],
};

const getOpenKeys = (pathname, flatMenuKeys) => (
  getMeunMatchKeys(flatMenuKeys, urlToList(pathname))
);

class Sider extends Component {
  constructor(props) {
    super(props);
    this.flatMenuKeys = getFlatMenuKeys(this.props.menuData);
  }

  state = {
    openKeys: getOpenKeys(this.props.location.pathname, this.flatMenuKeys),
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({
        openKeys: getOpenKeys(this.props.location.pathname, this.flatMenuKeys),
      });
    }
  }

  handleOpenChange = (openKeys) => {
    this.setState({
      openKeys,
    });
  };

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
      style={{ padding: '16px 0', width: '100%' }}
      openKeys={this.state.openKeys}
      selectedKeys={this.state.openKeys}
      onOpenChange={this.handleOpenChange}
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
