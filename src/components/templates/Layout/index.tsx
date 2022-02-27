import type { IconType } from 'react-icons';
import { css } from '@emotion/react';
import { useState } from 'react';
import Head from 'next/head';
import { PageTitle } from '@atoms';
import { Header, Footer, Nav } from '@organisms';
import { Container } from '@templates';

const Layout: React.FC<{
  title: string;
  menu: { href: string; icon: IconType; innerHTML: string }[];
}> = ({ children, title, menu }) => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => {
    setNavOpen(true);
  };

  const handleNavClose = () => {
    setNavOpen(false);
  };

  return (
    <>
      <Head>
        <title>{title} | Saat Log</title>
      </Head>
      <Header />
      <div
        css={css`
          padding: 32px 0;
        `}
      >
        <Container>
          <PageTitle>{title}</PageTitle>
          {children}
        </Container>
      </div>
      <Nav
        menu={menu}
        isOpen={navOpen}
        handleNavOpen={handleNavOpen}
        handleNavClose={handleNavClose}
      />
      <Footer />
    </>
  );
};

export default Layout;
