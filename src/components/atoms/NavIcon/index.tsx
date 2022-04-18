import type { IconType } from 'react-icons';
import { css } from '@emotion/react';
import Link from 'next/link';

type Props = {
  Icon: IconType;
  onClick?: any;
  href: string;
  children?: React.ReactNode;
};

const NavIcon: React.VFC<Props> = ({ Icon, children, onClick, href }) => {
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
      <Link href={href} passHref>
        <a
          css={css`
            display: block;
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
        </a>
      </Link>
    </li>
  );
};

export default NavIcon;
