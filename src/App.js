import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

import Calculator from './components/Calculator/Calculator';
import Navbar from './components/Navbar';

function App() {
  return (
    <Layout>
      <Navbar />
      <Layout>
        <Content
          style={{
            background: '#fff',
            minHeight: 280,
          }}
        >
          <Calculator />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
