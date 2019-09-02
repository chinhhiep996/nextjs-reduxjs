import { Layout } from 'antd';

import Navbar from '../src/components/Navbar';
import Calculator from '../src/components/Calculator/Calculator';

const { Content } = Layout;

function Index() {
  return <Layout>
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
  </Layout>;
}

export default Index;
