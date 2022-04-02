import { useState } from 'react';
import { useRouter } from 'next/router';
import { useModal } from '@/hooks';
import useSignUpModule from './signup.module';

const useSignUp = () => {
  const { userService, authService } = useSignUpModule();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [wait, setWait] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>('******');
  const [isOpen, handleModalOpen, handleModalClose] = useModal();
  const router = useRouter();
  const [createUser] = userService.createUser();

  const handleSignUp = async () => {
    try {
      setWait(true);

      const res = await authService.signup(email, password);

      await createUser({ variables: { name, authId: `auth0|${res.Id}` } });
      alert('確認メールを送信しました');

      router.push('/signin');
    } catch (e) {
      setWait(false);
      alert('登録に失敗');
    }
  };

  const handleConfirm = () => {
    if (!email || !password || !name) return;

    handleModalOpen();
    setConfirmPassword(password.split('').reduce((acc, cur) => acc + '*', ''));
  };

  return {
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
  };
};

export default useSignUp;
