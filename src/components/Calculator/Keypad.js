import React from 'react';
import { Row, Col, Button, Icon } from 'antd';
import PropTypes from 'prop-types';

import './Keypad.css';

const Keypad = (props) => {
  const handleOnDigit = (e) => {
    props.onDigit(e.target.value);
  }

  return (
    <div className="calculator-keypad">
      <Row className="calculator-keypad-row">
        <Col span={6}>
          <Button className="calculator-button" size='large'
            onClick={props.onClearAll}
          >
            CE
          </Button>
        </Col>
        <Col span={6}>
          <Button className="calculator-button" size='large'
            onClick={props.onClear}
          >
            C
          </Button>
        </Col>
        <Col span={6}>
          <Button className="calculator-button" size='large'
            onClick={props.onDelete}
          >
            <Icon type="caret-left" />
          </Button>
        </Col>
        <Col span={6}>
          <Button className="calculator-button" size='large'
            value="/" onClick={props.onDivide}
          >
            &divide;
          </Button>
        </Col>
      </Row>
      <Row className="calculator-keypad-row">
        <Col span={6}>
          <Button className="calculator-button" size='large'
            value="7" onClick={handleOnDigit}
          >
            7
          </Button>
        </Col>
        <Col span={6}>
          <Button className="calculator-button" size='large'
            value="6" onClick={handleOnDigit}
          >
            6
          </Button>
        </Col>
        <Col span={6}>
          <Button className="calculator-button" size='large'
            value="9" onClick={handleOnDigit}
          >
            9
          </Button>
        </Col>
        <Col span={6}>
          <Button className="calculator-button" size='large'
            value="*" onClick={props.onMultiply}
          >
            &times;
          </Button>
        </Col>
      </Row>
      <Row className="calculator-keypad-row">
        <Col span={6}>
          <Button className="calculator-button" size='large'
            value="4" onClick={handleOnDigit}
          >
            4
          </Button>
        </Col>
        <Col span={6}>
          <Button className="calculator-button" size='large'
            value="5" onClick={handleOnDigit}
          >
            5
          </Button>
        </Col>
        <Col span={6}>
          <Button className="calculator-button" size='large'
            value="6" onClick={handleOnDigit}
          >
            6
          </Button>
        </Col>
        <Col span={6}>
          <Button className="calculator-button" size='large'
            value="-" onClick={props.onSubtract}
          >
            &minus;
          </Button>
        </Col>
      </Row>
      <Row className="calculator-keypad-row">
        <Col span={6}>
          <Button className="calculator-button" size='large'
            value="1" onClick={handleOnDigit}
          >
            1</Button>
        </Col>
        <Col span={6}>
          <Button className="calculator-button" size='large'
            value="2" onClick={handleOnDigit}
          >
            2</Button>
        </Col>
        <Col span={6}>
          <Button className="calculator-button" size='large'
            value="3" onClick={handleOnDigit}
          >
            3</Button>
        </Col>
        <Col span={6}>
          <Button className="calculator-button" size='large'
            value="+" onClick={props.onAdd}
          >&#43;</Button>
        </Col>
      </Row>
      <Row className="calculator-keypad-row">
        <Col span={6}>
          <Button className="calculator-button" size='large'
            value="+-" onClick={props.onToggleSign}
          >&plusmn;</Button>
        </Col>
        <Col span={6}>
          <Button className="calculator-button" size='large'
            value="0" onClick={handleOnDigit}
          >0</Button>
        </Col>
        <Col span={6}>
          <Button className="calculator-button" size='large'
            onClick={props.onPoint}
          >.</Button>
        </Col>
        <Col span={6}>
          <Button className="calculator-button" size='large'
            value="=" onClick={props.onEquals}
          >=</Button>
        </Col>
      </Row>
    </div>
  );
}

Keypad.propTypes = {
  onDigit: PropTypes.func,
  onClear: PropTypes.func,
  onClearAll: PropTypes.func,
  onDelete: PropTypes.func,
  onAdd: PropTypes.func,
  onEquals: PropTypes.func,
  onDecimalPoint: PropTypes.func,
  onSubtract: PropTypes.func,
  onDivide: PropTypes.func,
  onMultiply: PropTypes.func,
  onToggleSign: PropTypes.func
};

export default Keypad;
