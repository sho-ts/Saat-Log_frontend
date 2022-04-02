import { UserRepository } from '@/repositories';

class UserService {
  readonly repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  getCurrentUser() {
    return this.repository.getCurrentUser();
  }

  createUser() {
    return this.repository.createUser();
  }
}

export default UserService;