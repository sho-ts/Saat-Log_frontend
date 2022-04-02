import { AuthService } from '@/services';

const useAuthProviderModule = () => {
  return {
    authService: AuthService.getInstance(),
  };
};

export default useAuthProviderModule;
