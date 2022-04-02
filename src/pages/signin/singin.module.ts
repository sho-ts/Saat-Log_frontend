import { AuthService } from '@/services';

const useSignInModule = () => {
  return {
    authService: AuthService.getInstance(),
  };
};

export default useSignInModule;
