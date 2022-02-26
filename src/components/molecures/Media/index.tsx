import { css } from '@emotion/react';

type Props = {
  src?: string;
  reverse?: boolean;
};

const Media: React.FC<Props> = ({ src, reverse, children }) => {
  return (
    <div css={[styles.base, reverse && styles.reverse]}>
      <div css={styles.image} style={{ backgroundImage: src }} />
      <div css={styles.body}>
        <div css={styles.sentence}>{children}</div>
      </div>
    </div>
  );
};

const styles = {
  base: css`
    @media screen and (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `,
  reverse: css`
    flex-direction: row-reverse;
  `,
  image: css`
    padding-top: 60%;
    @media screen and (max-width: 767px) {
      margin-bottom: 24px;
    }
    @media screen and (min-width: 768px) {
      padding-top: 30%;
      width: calc(50% - 24px);
    }
    background-color: #ddd;
  `,
  body: css`
    @media screen and (min-width: 768px) {
      width: 50%;
    }
  `,
  sentence: css`
    p {
      font-size: 20px;
      line-height: 1.8;
    }
  `,
};

export default Media;
