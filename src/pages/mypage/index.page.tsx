import { css } from '@emotion/react';
import { PageTitle, SubTitle } from '@atoms';
import { TaskItem } from '@molecures';
import { Header, Footer, Nav } from '@organisms';
import { Container } from '@templates';
import { useState } from 'react';

const Mypage = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => {
    setNavOpen(true);
  };

  const handleNavClose = () => {
    setNavOpen(false);
  };

  return (
    <>
      <Header />
      <div
        css={css`
          padding: 32px 0;
        `}
      >
        <Container>
          <PageTitle>マイページ</PageTitle>
          <section>
            <SubTitle>本日のタスク</SubTitle>
            <ul>
              <TaskItem name='タスク1' progress={20} />
              <TaskItem name='タスク2' progress={30} />
              <TaskItem name='タスク3' progress={20} isActive />
              <TaskItem name='タスク2' progress={30} />
              <TaskItem name='タスク2' progress={50} />
            </ul>
          </section>
        </Container>
      </div>
      <Nav isOpen={navOpen} handleNavOpen={handleNavOpen} handleNavClose={handleNavClose} />
      <Footer />
    </>
  );
};

export default Mypage;
