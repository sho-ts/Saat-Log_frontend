import { UserRepository } from '@/repositories';
import { useLazyQuery, useMutation } from '@apollo/client';

class UserService {
  readonly repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  useCreateUserMutation() {
    return useMutation(this.repository.CREATE_USER);
  }

  useCurrentUserQuery() {
    return useLazyQuery<{ name: string }>(this.repository.GET_USER);
  }
}

export default UserService;
