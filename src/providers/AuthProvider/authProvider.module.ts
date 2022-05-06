import { AuthService, UserService } from '@/services';
import { UserRepository } from '@/repositories';

const useAuthProviderModule = () => {
  return {
    authService: AuthService.getInstance(),
    userService: new UserService(new UserRepository()),
  };
};

export default useAuthProviderModule;
