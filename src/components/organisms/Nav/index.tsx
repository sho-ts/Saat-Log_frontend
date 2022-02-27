import type { IconType } from 'react-icons';
import { css } from '@emotion/react';
import { NavItem } from '@atoms';
import { CgMenuGridO } from 'react-icons/cg';

type Props = {
  isOpen?: boolean;
  handleNavOpen: () => void;
  handleNavClose: () => void;
  menu: { href: string; icon: IconType; innerHTML: string }[];
};

const Nav: React.FC<Props> = ({ isOpen, menu, handleNavOpen, handleNavClose }) => {
  return (
    <>
      <nav
        css={css`
          opacity: ${isOpen ? 1 : 0};
          visibility: ${isOpen ? 'visible' : 'hidden'};
          transition: all 0.3s;
        `}
      >
        <div onClick={handleNavClose} css={styles.bg} />
        <div
          css={[
            styles.inner,
            css`
              transform: ${isOpen ? 'translate(-50%, -50%)' : 'translate(-50%, -40%)'};
            `,
          ]}
        >
          <ul css={styles.menu}>
            {menu.map((item, index) => (
              <NavItem key={index} onClick={handleNavClose} href={item.href} Icon={item.icon}>
                {item.innerHTML}
              </NavItem>
            ))}
          </ul>
        </div>
      </nav>
      <button
        onClick={handleNavOpen}
        css={[
          styles.toggleButton,
          css`
            opacity: ${isOpen ? 0 : 1};
            transform: ${isOpen ? 'scale(0.5)' : 'none'};
          `,
        ]}
      >
        <CgMenuGridO size='24' color='#888' />
      </button>
    </>
  );
};

const styles = {
  bg: css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 50000;
    cursor: pointer;
  `,
  inner: css`
    position: fixed;
    top: 50%;
    left: 50%;
    transition: all 0.4s;
    width: calc(100% - 24px);
    max-width: 360px;
    max-height: 400px;
    border-radius: 16px;
    background-color: #f1f1ff;
    padding: 32px 24px;
    box-shadow: 16px 16px 16px rgba(0, 0, 0, 0.1);
    z-index: 50100;
  `,
  menu: css`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 10px;
    width: 100%;
    margin-bottom: -24px;
    &::after {
      content: '';
      width: 90px;
    }
  `,
  toggleButton: css`
    position: fixed;
    right: 10px;
    bottom: 10px;
    width: 56px;
    height: 56px;
    background-color: #f5f5ff;
    box-shadow: inset 4px 4px 8px #ffffff, inset -4px -4px 8px rgba(100, 100, 150, 0.2),
      4px 4px 8px rgba(100, 100, 150, 0.3);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    z-index: 10000;
  `,
};

export default Nav;
