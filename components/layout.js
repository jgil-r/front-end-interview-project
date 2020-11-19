import Head from 'next/head';
import styled from 'styled-components';

import Header from './header';
import Footer from './footer';

const Main = styled.main`
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
`;

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
        <Main>{children}</Main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
