import { gql } from '@apollo/client';

class TaskRepository {
  /** mutation */
  ADD_TASK = gql`
    mutation AddTask($userId: String!, $name: String!) {
      addTask(params: { userId: $userId, name: $name }) {
        name
      }
    }
  `;
}

export default TaskRepository;
