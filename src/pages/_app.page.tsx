import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { css, Global } from '@emotion/react';
import 'destyle.css';
import Provider from '@/providers';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider>
      <Global
        styles={css`
          body {
            background-color: #f5f5ff;
            font-size: 14px;
            font-family: 'Noto Sans JP', sans-serif;
          }
        `}
      />
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  );
}
export default MyApp;
