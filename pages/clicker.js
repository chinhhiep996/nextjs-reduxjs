import { Layout } from 'antd';

import Navbar from '../src/components/Navbar';
import Clicker from '../src/components/Clicker/Clicker';
const { Content } = Layout;

function Index() {
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
          <Clicker />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Index;
