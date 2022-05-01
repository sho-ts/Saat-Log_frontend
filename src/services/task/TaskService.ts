import { TaskRepository } from '@/repositories';

class TaskService {
  readonly repository: TaskRepository;

  constructor(repository: TaskRepository) {
    this.repository = repository;
  }

  addTask() {
    return this.repository.addTask();
  }
}

export default TaskService;
