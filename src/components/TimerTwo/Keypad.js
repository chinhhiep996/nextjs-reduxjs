import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'antd';

import './Keypad.css';

const Keypad = (props) => {
  return (
    <div>
      <div></div>
      {
        props.status === null &&
        <div className="timer2-keypad">
          <Row>
            <Col span={8}>
              <Button className="timer2-button" size='large' onClick={() => props.onClick(1)}>
                1
              </Button>
            </Col>
            <Col span={8}>
              <Button className="timer2-button" size='large' onClick={() => props.onClick(2)}>
                2
              </Button>
            </Col>
            <Col span={8}>
              <Button className="timer2-button" size='large' onClick={() => props.onClick(3)}>
                3
              </Button>
            </Col>
          </Row>
          <Row className="keypad-row">
            <Col span={8}>
              <Button className="timer2-button" size='large' onClick={() => props.onClick(4)}>
                4
              </Button>
            </Col>
            <Col span={8}>
              <Button className="timer2-button" size='large' onClick={() => props.onClick(5)}>
                5
              </Button>
            </Col>
            <Col span={8}>
              <Button className="timer2-button" size='large' onClick={() => props.onClick(6)}>
                6
              </Button>
            </Col>
          </Row>
          <Row className="keypad-row">
            <Col span={8}>
              <Button className="timer2-button" size='large' onClick={() => props.onClick(7)}>
                7
              </Button>
            </Col>
            <Col span={8}>
              <Button className="timer2-button" size='large' onClick={() => props.onClick(8)}>
                8
              </Button>
            </Col>
            <Col span={8}>
              <Button className="timer2-button" size='large' onClick={() => props.onClick(9)}>
                9
              </Button>
            </Col>
          </Row>
          <Row className="keypad-row">
            <Col span={8}>
              <Button className="timer2-button" size='large' onClick={() => props.onClick(-1)}>
                X
              </Button>
            </Col>
            <Col span={8}>
              <Button className="timer2-button" size='large' onClick={() => props.onClick(0)}>
                0
              </Button>
            </Col>
            <Col span={8}>
              <Button className="timer2-button" size='large'>
                &nbsp;
              </Button>
            </Col>
          </Row>
        </div>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    status: state.getIn(['timer2', 'status'])
  }
}

export default connect(mapStateToProps)(Keypad);
