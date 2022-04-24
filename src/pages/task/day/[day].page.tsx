import { PageTitle } from '@atoms';
import { withUserLayout } from '@layouts';

const DayTask = () => {
  return (
    <>
      <PageTitle></PageTitle>
    </>
  );
};

export default withUserLayout(DayTask, 'Dayタスク');
