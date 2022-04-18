import { css } from '@emotion/react';

const FormContainer: React.VFC = ({ children }) => {
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
      {children}
    </div>
  );
};

export default FormContainer;
