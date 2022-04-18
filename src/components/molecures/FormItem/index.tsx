import { css } from '@emotion/react';

type Props = {
  heading?: string;
};

const FormItem: React.VFC<Props> = ({ children, heading }) => {
  return (
    <div
      css={css`
        max-width: 500px;
        width: 100%;
        &:not(:last-child) {
          margin-bottom: 32px;
        }
      `}
    >
      {heading && (
        <p
          css={css`
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 8px;
          `}
        >
          {heading}
        </p>
      )}
      {children}
    </div>
  );
};

export default FormItem;
