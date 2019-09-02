import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import './Control.css';

const Control = (props) => {
  return (
    <>
      {
        props.status !== 'STARTED' &&
        props.status !== 'STOPPED' &&
        <div className="timer2-control">
          <Button type="primary" className="start"
            onClick={props.onStart}
            disabled={!props.canStart}
          >
            START
          </Button>
        </div>
      }
      {
        (props.status !== 'STARTED' || props.status !== 'STOPPED') &&
        <div className="timer2-control">
          {
            props.status === 'STARTED' &&
            <Button type="danger" className="stop run"
              onClick={props.onStop}
            >
              STOP
            </Button>
          }
          {
            props.status === 'STOPPED' &&
            <Button type="danger" className="stop run"
              onClick={props.onResume}
            >
              RESUME
            </Button>
          }
          <Button type="primary" className="reset run"
            onClick={props.onReset}
          >
            RESET
          </Button>
        </div>
      }
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    status: state.getIn(['timer2', 'status'])
  }
}

export default connect(mapStateToProps)(Control);
