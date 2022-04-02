import { AuthService } from '@/services';

const useAuthModule = () => {
  return {
    authService: AuthService.getInstance(),
  };
};

export default useAuthModule;
