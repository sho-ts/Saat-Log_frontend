import { Button, TextField, SubTitle } from '@atoms';
import { FormItem } from '@molecures';
import { FormContainer } from '@organisms';
import { withGuestLayout } from '@layouts';
import { css } from '@emotion/react';
import { useState } from 'react';
import { auth } from '@/auth';
import { useRouter } from 'next/router';

const SignUp = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('******');
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const onClickSignUp = async () => {
    try {
      const res = await auth.signup(email, password);
      router.push('/signin');
    } catch(e) {
      alert('登録に失敗');
    }
  };

  const handleConfirmModalOpen = () => {
    setConfirmModalIsOpen(true);
  };

  const handleConfirmModalClose = () => {
    setConfirmModalIsOpen(false);
  };

  const onClickConfirm = () => {
    if (!email || !password) return;

    handleConfirmModalOpen();
    setConfirmPassword(password.split('').reduce((acc, cur) => acc + '*', ''));
  };

  return (
    <>
      <FormContainer>
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
          onClick={onClickConfirm}
          styles={css`
            width: 130px;
          `}
        >
          登録
        </Button>
      </FormContainer>
      <div
        css={css`
          opacity: ${confirmModalIsOpen ? 1 : 0};
          visibility: ${confirmModalIsOpen ? 'visible' : 'hidden'};
          transition: all 0.3s;
        `}
      >
        <div onClick={handleConfirmModalClose} css={styles.confirm.wrapper} />
        <div css={styles.confirm.modal}>
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
                styles={css`
                  margin-right: 16px;
                `}
                onClick={handleConfirmModalClose}
              >
                戻る
              </Button>
              <Button onClick={onClickSignUp}>登録</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  confirm: {
    wrapper: css`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      z-index: 50000;
      cursor: pointer;
    `,
    modal: css`
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.4s;
      width: calc(100% - 24px);
      max-width: 500px;
      max-height: 400px;
      border-radius: 16px;
      background-color: #f1f1ff;
      padding: 32px 24px;
      box-shadow: 16px 16px 16px rgba(0, 0, 0, 0.1);
      z-index: 50100;
    `,
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
