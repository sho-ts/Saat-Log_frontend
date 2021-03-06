import { css } from '@emotion/react';

const SubTitle: React.VFC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <h2
      css={css`
        position: relative;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 16px;
      `}
    >
      <span>{children}</span>
    </h2>
  );
};

export default SubTitle;
