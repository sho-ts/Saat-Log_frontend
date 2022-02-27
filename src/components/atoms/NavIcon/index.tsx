import type { IconType } from 'react-icons';
import { css } from '@emotion/react';

type Props = {
  Icon: IconType;
  onClick?: any;
};

const NavIcon: React.FC<Props> = ({ Icon, children, onClick }) => {
  return (
    <li
      onClick={onClick}
      css={css`
        width: 90px;
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
        margin-bottom: 24px;
        cursor: pointer;
      `}
    >
      <div
        css={css`
          height: 70px;
          width: 70px;
          border-radius: 50%;
          box-shadow: -4px -4px 8px #ffffff, 4px 4px 8px rgba(100, 100, 150, 0.2);
          margin-bottom: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <Icon size='28' />
      </div>
      <span
        css={css`
          display: block;
          font-weight: bold;
        `}
      >
        {children}
      </span>
    </li>
  );
};

export default NavIcon;
