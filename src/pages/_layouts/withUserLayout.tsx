import { css } from '@emotion/react';
import Head from 'next/head';
import { PageTitle } from '@atoms';
import { Header, Footer, Nav } from '@organisms';
import { Container } from '@templates';
import { useState } from 'react';
import Provider from '@/providers';

const withUserLayout = (
  Page: {
    (): JSX.Element;
    getLayout?(page: React.ReactElement): JSX.Element;
  },
  title?: string,
) => {

  const UserLayout = (page: React.ReactElement) => {
    const [navOpen, setNavOpen] = useState(false);

    const handleNavOpen = () => {
      setNavOpen(true);
    };

    const handleNavClose = () => {
      setNavOpen(false);
    };

    return (
      <Provider>
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
            <PageTitle>{title ?? 'Saat Log'}</PageTitle>
            {page}
          </Container>
        </div>
        <Nav isOpen={navOpen} handleNavOpen={handleNavOpen} handleNavClose={handleNavClose} />
        <Footer />
      </Provider>
    );
  };

  Page.getLayout = UserLayout;

  return Page;
};

export default withUserLayout;