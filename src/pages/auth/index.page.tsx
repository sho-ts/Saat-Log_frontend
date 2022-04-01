import { auth } from '@/auth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Oval } from 'react-loader-spinner';
import { css } from '@emotion/react';
import Head from 'next/head';

const Auth = () => {
  const router = useRouter();

  useEffect(() => {
    auth
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
