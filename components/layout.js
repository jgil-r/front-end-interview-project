import Head from 'next/head';

import Header from './header';

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/zdz0zoa.css" />
      </Head>
      <div>
        <Header />
        <main>{children}</main>
        <footer>Footer</footer>
      </div>
    </div>
  );
};

export default Layout;
