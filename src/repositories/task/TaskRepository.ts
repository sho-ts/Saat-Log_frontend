import { gql } from '@apollo/client';
import { useLazyQuery, useMutation } from '@apollo/client';

class TaskRepository {
  addTask() {
    return useMutation<{ name: string }>(gql`
      mutation AddTask(userId: String!, $authId: String!) {
        addTask(params: { userId: $userId, name: $authId }) {
          name
        }
      }
    `);
  }
}

export default TaskRepository;
