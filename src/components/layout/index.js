import Head from 'next/head';
import Link from 'next/link';

const Layout = (props) => {
  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' key='viewport' />
      </Head>
      <body>
        {props.children}
      </body>
    </div>
  );
}

export default Layout;
