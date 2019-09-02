import { Layout } from 'antd';

import Navbar from '../src/components/Navbar';
import TimerTwo from '../src/components/TimerTwo/TimerTwo';

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
        <TimerTwo />
      </Content>
    </Layout>
  </Layout>;
}

export default Index;