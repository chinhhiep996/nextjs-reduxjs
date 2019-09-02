import React, { useState } from 'react';
import { Layout, Row, Col, Icon } from 'antd';

import MyHeader from '../MyHeader';
import Display from './Display';
import './Timer.css';

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isRun, setIsRun] = useState(false);
  const [intervalId, setIntervalId] = useState();

  const toggleTimer = () => {
    if (isRun) {
      clearInterval(intervalId);

      setIsRun(false);
    } else {
      setIntervalId(setInterval(() => {
        setTimer((prevTimer) => (prevTimer + 10));
      }, 10))

      setIsRun(true);
    }
  }

  const resetTimer = () => {
    setTimer(0);
  }

  return (
    <Layout className="timer-layout">
      <MyHeader title="React Timer 1" typeIcon="clock-circle" />
      <div className="timer">
        <div className="timer-display">
          <Display timer={timer} />
        </div>
        <Row className="timer-button-panel">
          <Col className="timer-button"
            onClick={toggleTimer}
            style={{ backgroundColor: 'green', color: 'white' }} span={12}>
            {
              isRun
                ? <Icon style={{ marginRight: '-70px' }} type="pause-circle" className="timer-icon" />
                : <Icon style={{ marginRight: '-70px', fontSize: '50px' }} className="timer-icon" type="caret-right" />
            }
          </Col>
          <Col className="timer-button"
            onClick={resetTimer}
            style={{ backgroundColor: 'blue', color: 'white' }} span={12}>
            <Icon style={{ marginLeft: '-70px' }} className="timer-icon" type="sync" />
          </Col>
        </Row>
      </div>
    </Layout>
  );
}

export default Timer;
