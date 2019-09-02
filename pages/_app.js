import React, { Component } from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { fromJS } from 'immutable';

import { initStore } from '../src/store/index';
import Layout from '../src/components/layout';

class MyApp extends Component {
  render() {
    const { Component, pageProps, store } = this.props

    return (
      <Container>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(initStore, {
  serializeState: state => state.toJS(),
  deserializeState: state => fromJS(state)
})(withReduxSaga(MyApp));
