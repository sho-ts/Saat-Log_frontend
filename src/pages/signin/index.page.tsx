import { Button, TextField } from '@atoms';
import { FormItem } from '@molecures';
import { FormContainer } from '@organisms';
import { withGuestLayout } from '@layouts';
import { css } from '@emotion/react';
import { useState } from 'react';
import useSignInModule from './singin.module';

const SignIn = () => {
  const { authService } = useSignInModule();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onClickSignIn = async () => {
    const res = await authService.signin(email, password);
    console.log(res);
  };

  return (
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
        styles={css`
          width: 130px;
        `}
        onClick={onClickSignIn}
      >
        ログイン
      </Button>
    </FormContainer>
  );
};

export default withGuestLayout(SignIn, 'ログイン');