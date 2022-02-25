import { css } from '@emotion/react';
import { PageTitle, SubTitle } from '@atoms';
import { TaskItem } from '@molecures';
import { Header, Footer } from '@organisms';
import { Container } from '@templates';

const Mypage = () => {
  return (
    <>
      <Header />
      <div css={css`
        padding: 32px 0;
      `}>
        <Container>
          <PageTitle>マイページ</PageTitle>
          <section>
            <SubTitle>本日のタスク</SubTitle>
            <ul>
              <TaskItem name="タスク1" progress={20} />
              <TaskItem name="タスク2" progress={30} />
              <TaskItem name="タスク3" progress={20} />
            </ul>
          </section>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Mypage;
