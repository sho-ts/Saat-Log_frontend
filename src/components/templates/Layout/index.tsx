import type { IconType } from 'react-icons';
import { css } from '@emotion/react';
import { useModal } from '@/hooks';
import Head from 'next/head';
import { PageTitle } from '@atoms';
import { Header, Footer, Nav } from '@organisms';
import { Container } from '@templates';

const Layout: React.FC<{
  title: string;
  menu: { href: string; icon: IconType; innerHTML: string }[];
}> = ({ children, title, menu }) => {
  const [isOpen, handleModalOpen, handleModalClose] = useModal();

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
        isOpen={isOpen}
        handleModalOpen={handleModalOpen}
        handleModalClose={handleModalClose}
      />
      <Footer />
    </>
  );
};

export default Layout;
