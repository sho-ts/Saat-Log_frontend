import { useState, useEffect } from 'react';
import { auth } from '@/auth';
import { useRouter } from 'next/router';

const AuthProvider: React.FC = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const isLogin = await auth.checkIdToken();
        isLogin && setIsChecked(true);
      } catch (e) {
        router.push('/signin');
      }
    })();
  }, []);

  return isChecked ? <>{children}</> : <></>;
};

export default AuthProvider;
