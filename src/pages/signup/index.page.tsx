import useSignUp from './hook';
import { css } from '@emotion/react';
import { Button, TextField, SubTitle } from '@atoms';
import { Modal, FormItem } from '@molecures';
import { FormContainer } from '@organisms';
import { withGuestLayout } from '@layouts';

const SignUp = () => {
  const {
    name,
    email,
    password,
    wait,
    confirmPassword,
    isOpen,
    setName,
    setEmail,
    setPassword,
    handleSignUp,
    handleConfirm,
    handleModalClose,
  } = useSignUp();

  return (
    <>
      <FormContainer>
        <FormItem heading='ニックネーム'>
          <TextField
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            type='text'
          />
        </FormItem>
        <FormItem heading='メールアドレス'>
          <TextField
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            type='email'
          />
        </FormItem>
        <FormItem heading='パスワード'>
          <TextField
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            type='password'
          />
        </FormItem>
        <Button
          onClick={handleConfirm}
          styles={css`
            width: 130px;
          `}
        >
          登録
        </Button>
      </FormContainer>
      <Modal isOpen={isOpen} handleModalClose={handleModalClose}>
        <div
          css={css`
            text-align: center;
            overflow: scroll;
            max-width: 100%;
            padding: 8px 0;
          `}
        >
          <SubTitle>こちらの内容で登録しますか？</SubTitle>
          <table css={styles.confirm.items}>
            <tr css={styles.confirm.item}>
              <th css={styles.confirm.title}>Name</th>
              <td css={styles.confirm.data}>{name}</td>
            </tr>
            <tr css={styles.confirm.item}>
              <th css={styles.confirm.title}>Email</th>
              <td css={styles.confirm.data}>{email}</td>
            </tr>
            <tr css={styles.confirm.item}>
              <th css={styles.confirm.title}>Password</th>
              <td css={styles.confirm.data}>{confirmPassword}</td>
            </tr>
          </table>
          <div css={styles.confirm.buttons}>
            <Button
              disabled={wait}
              styles={css`
                margin-right: 16px;
              `}
              onClick={handleModalClose}
            >
              戻る
            </Button>
            <Button onClick={handleSignUp}>登録</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

const styles = {
  confirm: {
    items: css`
      margin-bottom: 24px;
    `,
    item: css`
      text-align: left;
      max-width: calc(100% - 32px);
    `,
    title: css`
      padding: 8px 16px 8px 0;
    `,
    data: css`
      padding: 8px 0;
    `,
    buttons: css`
      display: flex;
      justify-content: center;
    `,
  },
};

export default withGuestLayout(SignUp, '新規登録');
