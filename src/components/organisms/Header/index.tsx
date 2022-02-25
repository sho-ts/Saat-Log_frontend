import { css } from '@emotion/react';

const Header: React.FC = () => {
  return (
    <header css={styles.base}>
      <h1 css={styles.logo}>
        <span>Saat Log</span>
      </h1>
    </header>
  )
}

const styles = {
  base: css`
    background: rgb(115,25,255);
    background: linear-gradient(90deg, rgba(115,25,255,1) 0%, rgba(25,177,254,1) 100%);
    padding: 16px 24px;
  `,
  logo: css`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  `,
}

export default Header;