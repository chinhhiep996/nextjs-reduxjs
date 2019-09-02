import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import { Typography } from 'antd';

import './MyHeader.css';
const { Header } = Layout;
const { Text } = Typography;

const MyHeader = (props) => {
  return (
    <Header className="header">
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
        className="menu"
      >
        <Menu.Item style={{ padding: '0' }} key="icon">
          <Icon type={props.typeIcon} className="icon-header" />
        </Menu.Item>
        <Menu.Item style={{ marginBottom: '10px', padding: '0' }} key="text">
          <Text className="title">
            {props.title}
          </Text>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

MyHeader.defaultProps = {
  title: 'Title',
  typeIcon: 'like'
}

MyHeader.propTypes = {
  title: PropTypes.string,
  typeIcon: PropTypes.string
}

export default MyHeader;
