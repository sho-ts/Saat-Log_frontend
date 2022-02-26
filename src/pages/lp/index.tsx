import { NextPage } from 'next';
import { css } from '@emotion/react';
import { Media } from '@molecures';
import { Footer, Header, MainVisual } from '@organisms';
import { Container } from '@templates';

const LP: NextPage = () => {
  return (
    <div>
      <Header />
      <MainVisual />
      <div css={styles.wrapper}>
        <section css={styles.section.base}>
          <Container>
            <h2 css={styles.section.heading}>
              <span>ワンクリックで作業の工数を計測</span>
            </h2>
            <Media>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, vitae dignissimos!
                Doloremque delectus reprehenderit cumque quia eveniet itaque facilis dicta placeat
                mollitia illo, quas, fugit quo quam voluptas totam aliquam.
              </p>
            </Media>
          </Container>
        </section>
        <section css={[styles.section.base, styles.section.gradient]}>
          <Container>
            <h2 css={styles.section.heading}>
              <span>ダミータイトル</span>
            </h2>
            <Media reverse>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, vitae dignissimos!
                Doloremque delectus reprehenderit cumque quia eveniet itaque facilis dicta placeat
                mollitia illo, quas, fugit quo quam voluptas totam aliquam.
              </p>
            </Media>
          </Container>
        </section>
        <section css={styles.section.base}>
          <Container>
            <h2 css={styles.section.heading}>
              <span>ダミータイトル</span>
            </h2>
            <div css={styles.section.read}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ex, dolor
                voluptatem distinctio atque, quam sapiente, optio blanditiis error perspiciatis
                repudiandae aperiam? Earum, voluptas mollitia consequatur nobis consequuntur
                provident voluptatum.
              </p>
            </div>
            <div css={styles.row}>
              <div css={styles.column}></div>
              <div css={styles.column}></div>
              <div css={styles.column}></div>
            </div>
          </Container>
        </section>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  wrapper: css`
    padding: 24px 0;
  `,
  section: {
    base: css`
      padding: 56px 0;
      @media screen and (min-width: 768px) {
        padding: 86px 0;
      }
    `,
    gradient: css`
      background: rgb(115, 25, 255);
      background: linear-gradient(90deg, rgba(115, 25, 255, 0.1) 0%, rgba(25, 177, 254, 0.1) 100%);
    `,
    heading: css`
      font-weight: bold;
      margin-bottom: 48px;
      text-align: center;
      font-size: 32px;
      @media screen and (min-width: 768px) {
        font-size: 48px;
      }
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
};

export default LP;
