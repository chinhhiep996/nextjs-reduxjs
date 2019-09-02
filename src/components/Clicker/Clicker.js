import React from 'react';
import { Layout, Row, Col, Icon } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementCount, decrementCount, resetCount } from '../../actions/countAction';

import MyHeader from '../MyHeader';
import './Clicker.css';

const Clicker = (props) => {
  const { count, incrementCount, decrementCount, resetCount } = props;

  return (
    <Layout className="clicker-layout">
      <MyHeader title="React Clicker" />
      <div className="clicker">
        <div className="clicker-display">
          {count}
        </div>
        <Row className="clicker-button-panel">
          <Col className="clicker-button"
            style={{ backgroundColor: 'green', color: 'white' }}
            span={8} onClick={incrementCount}
          >
            <Icon className="clicker-icon" type="plus" />
          </Col>
          <Col className="clicker-button"
            style={{ backgroundColor: 'yellow', color: 'black' }}
            span={8} onClick={resetCount}
          >
            <Icon className="clicker-icon" type="redo" />
          </Col>
          <Col className="clicker-button"
            style={{ backgroundColor: 'red', color: 'white' }}
            span={8} onClick={decrementCount}
          >
            <Icon className="clicker-icon" type="minus" />
          </Col>
        </Row>
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.getIn(['count', 'count'])
  }
}

const mapDispachToProps = (dispatch) => {
  return {
    incrementCount: bindActionCreators(incrementCount, dispatch),
    decrementCount: bindActionCreators(decrementCount, dispatch),
    resetCount: bindActionCreators(resetCount, dispatch)
  }
}

export default connect(mapStateToProps, mapDispachToProps)(Clicker);
