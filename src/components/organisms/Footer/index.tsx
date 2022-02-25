import { css } from '@emotion/react';

const Footer: React.FC = () => {
  return (
    <footer css={styles.base}>
      <p css={styles.logo}>Saat Log</p>
    </footer>
  );
};

const styles = {
  base: css`
    background: rgb(115, 25, 255);
    background: linear-gradient(90deg, rgba(115, 25, 255, 1) 0%, rgba(25, 177, 254, 1) 100%);
    color: #fff;
    padding: 16px;
  `,
  logo: css`
    text-align: center;
    font-size: 14px;
  `,
};

export default Footer;
