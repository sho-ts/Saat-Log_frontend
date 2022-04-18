import type { IconType } from 'react-icons';
import { css } from '@emotion/react';
import { NavItem } from '@atoms';
import { Modal } from '@molecures';
import { CgMenuGridO } from 'react-icons/cg';

type Props = {
  isOpen: boolean;
  handleModalOpen: () => void;
  handleModalClose: () => void;
  menu: { href: string; icon: IconType; innerHTML: string }[];
};

const Nav: React.VFC<Props> = ({ isOpen, menu, handleModalOpen, handleModalClose }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        handleModalClose={handleModalClose}
        innerStyle={css`
          width: calc(100% - 24px);
          max-width: 360px;
          max-height: 400px;
        `}
      >
        <ul css={styles.menu}>
          {menu.map((item, index) => (
            <NavItem key={index} onClick={handleModalClose} href={item.href} Icon={item.icon}>
              {item.innerHTML}
            </NavItem>
          ))}
        </ul>
      </Modal>
      <button
        onClick={handleModalOpen}
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
