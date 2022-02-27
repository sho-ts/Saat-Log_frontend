import { SubTitle } from '@atoms';
import { TaskItem } from '@molecures';
import { withUserLayout } from '@layouts';

const Mypage = () => {
  return (
    <>
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
    </>
  );
};

export default withUserLayout(Mypage, 'マイページ');
