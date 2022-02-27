import { Button, TextField } from '@atoms';
import { FormItem } from '@molecures';
import { FormContainer } from '@organisms';
import { withGuestLayout } from '@layouts';
import { css } from '@emotion/react';

const SignIn = () => {
  return (
    <FormContainer>
      <FormItem heading='メールアドレス'>
        <TextField type='email' />
      </FormItem>
      <FormItem heading='パスワード'>
        <TextField type='password' />
      </FormItem>
      <Button
        styles={css`
          width: 130px;
        `}
      >
        ログイン
      </Button>
    </FormContainer>
  );
};

export default withGuestLayout(SignIn, 'ログイン');
