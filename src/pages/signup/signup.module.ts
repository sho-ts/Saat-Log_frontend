import { UserService, AuthService } from '@/services';
import { UserRepository } from '@/repositories';

const useSignUpModule = () => {
  return {
    userService: new UserService(new UserRepository()),
    authService: AuthService.getInstance(),
  };
};

export default useSignUpModule;
