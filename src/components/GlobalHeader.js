import React from 'react';
import { Avatar } from 'antd';
import 'antd/lib/avatar/style';
import get from 'lodash/get';
import './GlobalHeader.scss';

const renderGlobalHeader = user => (
  <div className="globalHeader-content">
    <Avatar
      className="globalHeader-avatar"
      size="large"
    >
      {get(user, 'name', '')}
    </Avatar>
  </div>
);

export default renderGlobalHeader;
