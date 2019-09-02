import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import { startClock } from '../src/actions/clockAction';
import Navbar from '../src/components/Navbar';
import Clock from '../src/components/Clock/Clock';

const { Content } = Layout;

class Index extends Component {
  componentDidMount() {
    this.props.dispatch(startClock());
  }

  render() {
    return <Layout>
      <Navbar />
      <Layout>
        <Content
          style={{
            background: '#fff',
            minHeight: 280,
          }}
        >
          <Clock date={this.props.lastUpdate} />
        </Content>
      </Layout>
    </Layout>;
  }
}


const mapStateToProps = (state) => {
  return {
    lastUpdate: state.getIn(['clock', 'lastUpdate'])
  }
}

export default connect(mapStateToProps)(Index);
