import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Oval } from 'react-loader-spinner';
import { css } from '@emotion/react';
import Head from 'next/head';
import useAuthModule from './auth.module';

const Auth = () => {
  const { authService } = useAuthModule();
  const router = useRouter();

  useEffect(() => {
    authService
      .parseHash()
      .then(() => router.push('/mypage'))
      .catch(() => router.push('/signin'));
  }, []);

  return (
    <>
      <Head>
        <title>認証中</title>
      </Head>
      <div
        css={css`
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `}
      >
        <Oval />
      </div>
    </>
  );
};

export default Auth;
