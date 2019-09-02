import { Layout } from 'antd';
import Link from 'next/link';

const { Sider } = Layout;

const NavBar = () => {
  return (
    <Sider trigger={null} collapsible>
      <div style={{ marginTop: '96px' }} />
      <div style={{ marginLeft: '14px', fontSize: '24px', height: '100vh' }}>
        <Link href="/calculator">
          <a>Calculator</a>
        </Link>
        <br />
        <Link href="/clicker">
          <a>Clicker</a>
        </Link>
        <br />
        <Link href="/clock">
          <a>Clock</a>
        </Link>
        <br />
        <Link href="/timer">
          <a>Timer</a>
        </Link>
        <br />
        <Link href="/timertwo">
          <a>Timertwo</a>
        </Link>
      </div>
    </Sider>
  );
}

export default NavBar;
