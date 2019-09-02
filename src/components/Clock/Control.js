import React from 'react';
import { Switch, Icon } from 'antd';

const Control = (props) => {
  return (
    <>
      <Switch checked={props.dateOn} onChange={() => props.toggleDate()} />
      <Icon type="calendar" style={{ fontSize: '28px', marginLeft: '5px' }} />
    </>
  );
}

export default Control;
