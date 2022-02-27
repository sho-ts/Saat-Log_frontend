import { withGuestLayout } from '@layouts';
import { css } from '@emotion/react';

const Login = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        @media screen and (min-width: 768px) {
          box-shadow: -4px -4px 8px #ffffff, 4px 4px 8px rgba(100, 100, 150, 0.2);
          border-radius: 16px;
          padding: 64px 0;
        }
      `}
    >
      <div
        css={css`
          margin-bottom: 32px;
          max-width: 500px;
          width: 100%;
        `}
      >
        <p
          css={css`
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 8px;
          `}
        >
          メールアドレス
        </p>
        <input
          css={css`
            box-shadow: inset -4px -4px 2px #fff, inset 4px 4px 4px rgba(50, 50, 150, 0.1);
            padding: 16px 16px;
            display: block;
            width: 100%;
            border-radius: 32px;
            font-size: 16px;
          `}
          type='email'
        />
      </div>
      <div
        css={css`
          margin-bottom: 32px;
          max-width: 500px;
          width: 100%;
        `}
      >
        <p
          css={css`
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 8px;
          `}
        >
          パスワード
        </p>
        <input
          css={css`
            box-shadow: inset -4px -4px 2px #fff, inset 4px 4px 4px rgba(50, 50, 150, 0.1);
            padding: 16px 16px;
            display: block;
            width: 100%;
            border-radius: 32px;
            font-size: 16px;
          `}
          type='password'
        />
      </div>
      <div
        css={css`
          text-align: center;
        `}
      >
        <button
          css={css`
            box-shadow: -4px -4px 8px #ffffff, 4px 4px 8px rgba(100, 100, 150, 0.2);
            display: inline-block;
            padding: 16px 32px;
            border-radius: 32px;
            font-weight: bold;
          `}
        >
          ログイン
        </button>
      </div>
    </div>
  );
};

export default withGuestLayout(Login, 'ログイン');
