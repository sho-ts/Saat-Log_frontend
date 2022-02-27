import type { HTMLInputTypeAttribute } from 'react';
import { css } from '@emotion/react';

type Props = {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  onChange?: any;
};

const TextField: React.FC<Props> = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      css={css`
        box-shadow: inset -4px -4px 2px #fff, inset 4px 4px 4px rgba(50, 50, 150, 0.1);
        padding: 16px 16px;
        display: block;
        width: 100%;
        border-radius: 32px;
        font-size: 16px;
      `}
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
    />
  );
};

export default TextField;
