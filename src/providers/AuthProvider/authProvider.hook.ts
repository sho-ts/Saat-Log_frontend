import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuthProviderModule from './authProvider.module';

const useAuthProvider = () => {
  const { authService, userService } = useAuthProviderModule();
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();
  const [currentUserQuery] = userService.useCurrentUserQuery();

  useEffect(() => {
    (async () => {
      try {
        const isLogin = await authService.checkIdToken();
        isLogin && setIsChecked(true);
        await currentUserQuery();
      } catch (e) {
        router.push('/signin');
      }
    })();
  }, []);

  return { isChecked };
};

export default useAuthProvider;
