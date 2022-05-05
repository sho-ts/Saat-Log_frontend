import { TaskRepository } from '@/repositories';
import { useLazyQuery, useMutation } from '@apollo/client';

class TaskService {
  readonly repository: TaskRepository;

  constructor(repository: TaskRepository) {
    this.repository = repository;
  }

  useAddTaskMutation() {
    return useMutation<{ name: string }>(this.repository.ADD_TASK);
  }
}

export default TaskService;
