import { NextPage } from 'next';
import { css } from '@emotion/react';

const LP: NextPage = () => {
  return (
    <div>
      <header css={styles.header.base}>
        <h1 css={styles.header.logo}>
          <span>Saat Log</span>
        </h1>
      </header>
      <div css={styles.mainVisual.base}>
        <div css={styles.mainVisual.inner}>
          <div css={styles.catch.base}>
            <h2 css={styles.catch.text}>
              ワンクリックで<br />
              工数を簡単に計測
            </h2>
            <div css={styles.button.base}>
              <div css={styles.button.inner}>
                <span>今すぐ始める</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div css={styles.wrapper}>
        <section css={styles.section.base}>
          <div css={styles.container}>
            <h2 css={styles.section.heading}>
              <span>ワンクリックで作業の工数を計測</span>
            </h2>
            <div css={styles.media.base}>
              <div css={styles.media.image} />
              <div css={styles.media.body}>
                <div css={styles.media.sentence}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, vitae dignissimos! Doloremque delectus reprehenderit cumque quia eveniet itaque facilis dicta placeat mollitia illo, quas, fugit quo quam voluptas totam aliquam.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section css={[styles.section.base, styles.section.gradient]}>
          <div css={styles.container}>
            <h2 css={styles.section.heading}>
              <span>ダミータイトル</span>
            </h2>
            <div css={[styles.media.base, styles.media.reverse]}>
              <div css={styles.media.image} />
              <div css={styles.media.body}>
                <div css={styles.media.sentence}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, vitae dignissimos! Doloremque delectus reprehenderit cumque quia eveniet itaque facilis dicta placeat mollitia illo, quas, fugit quo quam voluptas totam aliquam.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section css={styles.section.base}>
          <div css={styles.container}>
            <h2 css={styles.section.heading}>
              <span>ダミータイトル</span>
            </h2>
            <div css={styles.section.read}>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ex, dolor voluptatem distinctio atque, quam sapiente, optio blanditiis error perspiciatis repudiandae aperiam? Earum, voluptas mollitia consequatur nobis consequuntur provident voluptatum.</p>
            </div>
            <div css={styles.row}>
              <div css={styles.column}></div>
              <div css={styles.column}></div>
              <div css={styles.column}></div>
            </div>
          </div>
        </section>
      </div>
      <footer css={styles.footer.base}>
        <p css={styles.footer.logo}>Saat Log</p>
      </footer>
    </div>
  );
};

const styles = {
  header: {
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
  },
  mainVisual: {
    base: css`
      height: 600px;
      background: rgb(115,25,255);
      background: linear-gradient(90deg, rgba(115,25,255,1) 0%, rgba(25,177,254,1) 100%);
    `,
    inner: css`
      position: relative;
      max-width: 1200px;
      margin: 0 auto;
      height: 100%;
    `,
  },
  catch: {
    base: css`
      position: absolute;
      top: 50%;
      left: 24px;
      transform: translateY(-50%);
    `,
    text: css`
      color: #fff;
      font-size: 72px;
      font-weight: bold;
      letter-spacing: 0.025em;
      line-height: 1.2;
      margin-bottom: 40px;
    `,
  },
  button: {
    base: css`
      text-align: center;
    `,
    inner: css`
      display: inline-block;
      padding: 16px 40px;
      background-color: #fff;
      font-size: 24px;
      font-weight: bold;
      border-radius: 64px;
    `,
  },
  wrapper: css`
    padding: 24px 0;
  `,
  container: css`
    margin: 0 auto;
    max-width: 1000px;
    padding: 0 16px;
  `,
  section: {
    base: css`
      padding: 86px 0;
    `,
    gradient: css`
      background: rgb(115,25,255);
      background: linear-gradient(90deg, rgba(115,25,255,0.1) 0%, rgba(25,177,254,0.1) 100%);
    `,
    heading: css`
      font-size: 48px;
      font-weight: bold;
      margin-bottom: 48px;
      text-align: center;
    `,
    read: css`
      p {
        text-align: center;
        font-size: 20px;
        line-height: 1.8;
        &:not(:last-child) {
          margin-bottom: 1em;
        }
      }
    `,
  },
  media: {
    base: css`
      display: flex;
      align-items: center;
      justify-content: space-between;
    `,
    reverse: css`
      flex-direction: row-reverse;
    `,
    image: css`
      padding-top: 30%;
      width: calc(50% - 24px);
      background-color: #ddd;
    `,
    body: css`
      width: 50%;
    `,
    sentence: css`
      p {
        font-size: 20px;
        line-height: 1.8;
      }
    `,
  },
  row: css`
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
  `,
  column: css`
    width: calc(30%);
    padding-top: 25%;
    background-color: #ddd;
  `,
  footer: {
    base: css`
      background: rgb(115,25,255);
      background: linear-gradient(90deg, rgba(115,25,255,1) 0%, rgba(25,177,254,1) 100%);
      color: #fff;
      padding: 16px;
    `,
    logo: css`
      text-align: center;
      font-size: 14px;
    `,
  }
}

export default LP;
