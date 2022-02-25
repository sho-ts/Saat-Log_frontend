import { css } from '@emotion/react';

const SubTitle: React.FC = () => {
  return (
    <h2 css={css`
      position: relative;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 16px;
    `}>
      <span>
        本日のタスク
      </span>
    </h2>
  )
}

export default SubTitle;