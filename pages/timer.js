import { Layout } from 'antd';

import Navbar from '../src/components/Navbar';
import Timer from '../src/components/Timer/Timer';

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
        <Timer />
      </Content>
    </Layout>
  </Layout>;
}

export default Index;