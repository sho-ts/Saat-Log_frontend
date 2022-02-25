import { css } from '@emotion/react';
import Image from 'next/image';

const MainVisual: React.FC = () => {
  return (
    <div css={styles.base}>
      <div css={styles.inner}>
        <div css={styles.catch.base}>
          <h2 css={styles.catch.text}>
            ワンクリックで
            <br />
            工数を簡単に計測
          </h2>
          <div css={styles.button.base}>
            <div css={styles.button.inner}>
              <span>今すぐ始める</span>
            </div>
          </div>
        </div>
        <div css={css`
          position: absolute;
          width: 300px;
          height: 200px;
          bottom: 24px;
          right: -24px;
          @media screen and (min-width: 768px) {
            bottom: -100px;
            right: -100px;
            width: 700px;
            height: 600px;
          }
        `}>
          <Image src="/lp/mv__img.svg" objectFit="contain" layout="fill" />
        </div>
      </div>
    </div>
  );
};

const styles = {
  base: css`
    height: 500px;
    background: rgb(115, 25, 255);
    background: linear-gradient(90deg, rgba(115, 25, 255, 1) 0%, rgba(25, 177, 254, 1) 100%);
    overflow: hidden;
    @media screen and (min-width: 768px) {
      height: 600px;
    }
  `,
  inner: css`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
  `,
  catch: {
    base: css`
      position: absolute;
      top: 50%;
      left: 50%;
      z-index:1000;
      transform: translate(-50%, -50%);
      width: calc(100% - 32px);
      @media screen and (min-width: 768px) {
        width: auto;
        left: 24px;
        transform: translateY(-50%);
      }
    `,
    text: css`
      color: #fff;
      font-weight: bold;
      letter-spacing: 0.025em;
      line-height: 1.2;
      margin-bottom: 40px;
      text-shadow: 8px 8px 16px rgba(0,0,0, 0.3);
      font-size: 56px;
      @media screen and (min-width: 768px) {
        font-size: 72px;
      }
    `,
  },
  button: {
    base: css`
      text-align: center;
    `,
    inner: css`
      display: inline-block;
      padding: 16px 40px;
      background-color: #fff;
      font-size: 24px;
      font-weight: bold;
      border-radius: 64px;
      box-shadow: 8px 8px 16px rgba(0,0,0, 0.3);
    `,
  },
};

export default MainVisual;
