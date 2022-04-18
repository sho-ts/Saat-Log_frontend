import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

type Props = {
  wrapperStyle?: SerializedStyles;
  bgStyle?: SerializedStyles;
  innerStyle?: SerializedStyles;
  isOpen: boolean;
  handleModalClose: () => void;
  children?: React.ReactNode;
};

const Modal: React.VFC<Props> = ({
  wrapperStyle,
  bgStyle,
  innerStyle,
  isOpen,
  children,
  handleModalClose,
}) => {
  return (
    <div
      css={[
        css`
          opacity: ${isOpen ? 1 : 0};
          visibility: ${isOpen ? 'visible' : 'hidden'};
          transition: all 0.3s;
        `,
        wrapperStyle,
      ]}
    >
      <div
        onClick={handleModalClose}
        css={[
          css`
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.2);
            z-index: 50000;
            cursor: pointer;
          `,
          bgStyle,
        ]}
      />
      <div
        css={[
          css`
            position: fixed;
            top: 50%;
            left: 50%;
            transform: ${isOpen ? 'translate(-50%, -50%)' : 'translate(-50%, -40%)'};
            transition: all 0.4s;
            border-radius: 16px;
            background-color: #f1f1ff;
            padding: 32px 24px;
            box-shadow: 16px 16px 16px rgba(0, 0, 0, 0.1);
            z-index: 50100;
          `,
          innerStyle,
        ]}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
