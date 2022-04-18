import { css } from '@emotion/react';

const PageTitle: React.VFC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <h1
      css={css`
        position: relative;
        font-size: 24px;
        font-weight: bold;
        padding-bottom: 16px;
        margin-bottom: 24px;
        &::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 4px;
          bottom: 0;
          left: 0;
          background: rgb(115, 25, 255);
          background: linear-gradient(90deg, rgba(115, 25, 255, 1) 0%, rgba(25, 177, 254, 1) 100%);
        }
      `}
    >
      <span>{children}</span>
    </h1>
  );
};

export default PageTitle;
