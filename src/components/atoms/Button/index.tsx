import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

type Props = {
  styles?: SerializedStyles;
  algin?: 'left' | 'center' | 'right';
  onClick?: any;
};

const Button: React.FC<Props> = ({ onClick, styles, algin, children }) => {
  return (
    <div
      css={css`
        text-align: ${algin ?? 'center'};
      `}
    >
      <button
        type='button'
        onClick={onClick}
        css={[
          css`
            box-shadow: -4px -4px 8px #ffffff, 4px 4px 8px rgba(100, 100, 150, 0.2);
            display: inline-block;
            padding: 16px 32px;
            border-radius: 32px;
            font-weight: bold;
          `,
          styles,
        ]}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
