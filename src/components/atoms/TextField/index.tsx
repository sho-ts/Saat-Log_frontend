import type { HTMLInputTypeAttribute } from 'react';
import { css } from '@emotion/react';

type Props = {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  onChange?: any;
  rows?: number;
};

const TextField: React.VFC<Props> = (props) => {
  return props.rows && props.rows > 1 ? (
    <textarea {...props} css={styles.base(props.rows)}></textarea>
  ) : (
    <input {...props} css={styles.base()} />
  );
};

const styles = {
  base: (rows?: number) => css`
    box-shadow: inset -4px -4px 2px #fff, inset 4px 4px 4px rgba(50, 50, 150, 0.1);
    padding: 14px 16px;
    display: block;
    width: 100%;
    border-radius: ${rows ? '24px' : '32px'};
    font-size: 16px;
    line-height: 1.4;
    resize: none;
  `,
};

export default TextField;
