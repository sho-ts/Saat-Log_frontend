import { css } from '@emotion/react';

type Props = {
  name: string;
  target?: number;
  progress?: number;
  startedAt?: Date;
  isActive?: boolean;
};

const TaskItem: React.FC<Props> = ({ name, target, progress, startedAt, isActive }) => {
  return (
    <li
      css={css`
        padding: 16px 24px;
        border-radius: 16px;
        background-color: #f5f5ff;
        ${getShadow(isActive)}
        cursor: pointer;
        &:not(:last-child) {
          margin-bottom: 24px;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        `}
      >
        <p
          css={css`
            font-size: 16px;
            font-weight: bold;
          `}
        >
          {name}
        </p>
      </div>
      <div
        css={css`
          margin-bottom: 8px;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <h3
            css={css`
              font-size: 14px;
              font-weight: bold;
              margin-right: 16px;
            `}
          >
            経過時間
          </h3>
          <span>1:22</span>
          <span
            css={css`
              display: inline-block;
              margin: 0 8px;
            `}
          >
            /
          </span>
          <span>8:00</span>
        </div>
      </div>
      <div
        css={css`
          border-radius: 8px;
          overflow: hidden;
          height: 12px;
          width: 100%;
          box-shadow: inset -2px -2px 4px #fff, inset 2px 2px 4px rgba(150, 150, 150, 0.3);
        `}
      >
        <div
          css={css`
            border-radius: 8px;
            height: 100%;
            width: ${progress ?? 0}%;
            background: rgb(115, 25, 255);
            background: linear-gradient(90deg, #4861fe 0%, rgba(25, 177, 254, 1) 100%);
          `}
        />
      </div>
    </li>
  );
};

const getShadow = (isActive?: boolean) => css`
  box-shadow: ${isActive
    ? 'inset -4px -4px 6px #fff, inset 4px 4px 6px rgba(50, 50, 150, 0.1)'
    : '-4px -4px 8px #ffffff, 4px 4px 8px rgba(100, 100, 150, 0.2)'};
`;

export default TaskItem;
