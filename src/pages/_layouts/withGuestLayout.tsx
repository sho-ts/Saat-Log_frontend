import { css } from '@emotion/react';
import Head from 'next/head';
import { PageTitle } from '@atoms';
import { Header, Footer } from '@organisms';
import { Container } from '@templates';
import Provider from '@/providers';

const withGuestLayout = (
  Page: {
    (): JSX.Element;
    getLayout?(page: React.ReactElement): JSX.Element;
  },
  title?: string,
) => {

  const UserLayout = (page: React.ReactElement) => {
    return (
      <Provider isGuest>
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
        <Footer />
      </Provider>
    );
  };

  Page.getLayout = UserLayout;

  return Page;
};

export default withGuestLayout;