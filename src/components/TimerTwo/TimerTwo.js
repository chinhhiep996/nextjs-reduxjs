import React, { useState } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './TimerTwo.css';
import MyHeader from '../MyHeader';
import Keypad from './Keypad';
import Display from './Display';
import Control from './Control';
import { setHours, setMinutes, setSeconds, setStatus } from '../../actions/timer2Action';

const TimerTwo = (props) => {
  const [unitOfTime, setUnitOfTime] = useState(null);
  const [canStart, setCanStart] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  const [timer, setTimer] = useState(null);

  const handleFocusDisplay = (unitOfTime) => {
    setUnitOfTime(unitOfTime);
  }

  const handleKeypad = (time) => {
    if (unitOfTime === 'HH') {
      props.setHours(time);
    } else if (unitOfTime === 'MM') {
      props.setMinutes(time);
    } else if (unitOfTime === 'SS') {
      props.setSeconds(time);
    }
    onCanStart();
  }

  const onCanStart = () => {
    setCanStart(() => (
      props.status !== 'STARTED' && (parseInt(props.hours) > 0
        || parseInt(props.minutes) > 0
        || parseInt(props.seconds) > 0
      )
    ));
  }

  const handleControlsStart = () => {
    startTimer();
  }

  const startTimer = () => {
    if (props.status !== 'STARTED') {
      props.setStatus('STARTED');

      const miliseconds = ((parseInt(props.hours) * 60 * 60)
        + (parseInt(props.minutes) * 60)
        + parseInt(props.seconds))
        * 1000;

      setTimer(miliseconds);

      setIntervalId(setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            props.setStatus(null);
            return clearInterval(intervalId);
          }
          return (prevTimer - 10);
        });
      }, 10))
    }
  }

  const handleStop = () => {
    if (props.status === 'STARTED') {
      clearInterval(intervalId);
      props.setStatus('STOPPED');
    }
  }

  const handleResume = () => {
    if (props.status === 'STOPPED') {
      props.setStatus('STARTED');
      setIntervalId(setInterval(() => {
        setTimer((prevTimer) => (prevTimer - 10));
        if (timer === 0) {
          clearInterval(intervalId);
          props.setStatus(null);
        }
      }, 10))
    }
  }

  const handleReset = () => {
    clearInterval(intervalId);
    props.setStatus(null);
    setTimer(null);
  }

  return (
    <Layout className="layout">
      <MyHeader title="React Timer 2" typeIcon="clock-circle" />
      <div className="timer-two">
        <Display onFocusChange={handleFocusDisplay}
          hours={props.hours}
          minutes={props.minutes}
          seconds={props.seconds}
          timer={timer}
        />

        <Keypad onClick={handleKeypad} />

        <Control onStart={handleControlsStart}
          onStop={handleStop}
          onResume={handleResume}
          onReset={handleReset}
          canStart={props.status !== 'STARTED' && (parseInt(props.hours) > 0
            || parseInt(props.minutes) > 0
            || parseInt(props.seconds) > 0
          )}
        />
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    hours: state.getIn(['timer2', 'hours']),
    minutes: state.getIn(['timer2', 'minutes']),
    seconds: state.getIn(['timer2', 'seconds']),
    status: state.getIn(['timer2', 'status'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    setHours: bindActionCreators(setHours, dispatch),
    setMinutes: bindActionCreators(setMinutes, dispatch),
    setSeconds: bindActionCreators(setSeconds, dispatch),
    setStatus: bindActionCreators(setStatus, dispatch),
  }
}

export default connect(mapStateToProps, mapDispathToProps)(TimerTwo);
