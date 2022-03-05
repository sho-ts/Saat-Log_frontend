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
          `}
        >
          <SubTitle>こちらの内容で登録しますか？</SubTitle>
          <dl css={styles.confirm.items}>
            <div css={styles.confirm.item}>
              <dt css={styles.confirm.title}>Email</dt>
              <dd>{email}</dd>
            </div>
            <div css={styles.confirm.item}>
              <dt css={styles.confirm.title}>Password</dt>
              <dd>{confirmPassword}</dd>
            </div>
          </dl>
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
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 24px;
    `,
    item: css`
      display: flex;
      margin-bottom: 8px;
    `,
    title: css`
      margin-right: 8px;
    `,
    buttons: css`
      display: flex;
      justify-content: center;
    `,
  },
};

export default withGuestLayout(SignUp, '新規登録');
