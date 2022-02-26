import { css } from '@emotion/react';

const Container: React.FC = ({ children }) => {
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 1000px;
        padding: 0 16px;
      `}
    >
      {children}
    </div>
  );
};

export default Container;
