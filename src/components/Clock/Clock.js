import React, { useState } from 'react';
import { Layout } from 'antd';

import './Clock.css';
import MyHeader from '../MyHeader';
import Control from './Control';
import Display from './Display';

const Clock = (props) => {
  const [dateVisible, setDateVisible] = useState(true);

  const toggleDate = () => {
    setDateVisible((prevDateVisible) => (!prevDateVisible));
  }

  return (
    <Layout className="layout">
      <MyHeader title="React Clock" typeIcon="clock-circle" />
      <div className="clock">
        <Control toggleDate={toggleDate} dateOn={dateVisible} />
        <div className="clock-display">
          <Display date={new Date(props.date)} dateVisible={dateVisible} />
        </div>
      </div>
    </Layout>
  );
}

export default Clock;
