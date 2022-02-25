import { css } from '@emotion/react';

type Props = {
  name: string;
  target?: number;
  progress?: number;
  startedAt?: Date;
}

const TaskItem: React.FC<Props> = ({ name, target, progress, startedAt }) => {
  return (
    <li css={css`
      padding: 16px 24px;
      border-radius: 8px;
      border: 2px solid #4861FE;
      border-left: #4861FE 10px solid;
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    `}>
      <div css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      `}>
        <p>{name}</p>
        <div>
          <div css={css`
            text-align: center;
          `}>
            <button
              css={css`
                background: rgb(115,25,255);
                border: 2px solid rgb(115,25,255);
                border-radius: 32px;
                color: #fff;
                padding: 12px 32px;
                transition: all 0.3s;
                &:hover {
                  background-color: #fff;
                  color: rgb(115,25,255);
                }
              `}
            >
              開始
            </button>
          </div>
        </div>
      </div>
      <div
        css={css`
          margin-bottom: 8px;
        `}
      >
        <div css={css`
          display: flex;
          align-items: center;
        `}>
          <h3 css={css`
            font-size: 16px;
            font-weight: bold;
            margin-right: 16px;
          `}>
            経過時間
          </h3>
          <span>1:22</span>
          <span css={css`
            display: inline-block;
            margin: 0 8px;
          `}>/</span>
          <span>8:00</span>
        </div>
      </div>
      <div css={css`
        border: 2px solid #c4d6fb;
        border-radius: 4px;
        height: 24px;
        width: 100%;
      `}>
        <div css={css`
          height: 100%;
          width: ${progress ?? 0}%;
          background: rgb(115,25,255);
          background: linear-gradient(90deg, #4861FE 0%, rgba(25,177,254,1) 100%);
        `} />
      </div>
    </li>
  )
}

export default TaskItem;