import { auth } from '@/auth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Oval } from 'react-loader-spinner';
import { css } from '@emotion/react';
import Head from 'next/head';

const Auth = () => {
  const router = useRouter();

  useEffect(() => {
    if (window.location.hash) {
      auth.client.parseHash({ hash: window.location.hash }, (err, result) => {
        err && router.push('/signin');

        if (result) {
          localStorage.setItem('idToken', `${result?.idToken}`);
          router.push('/mypage');
        }
      });
    } else {
      router.push('/signin');
    }
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
