import { createUserQuery } from '@/graphql/queries/user.gql';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { useModal } from '@/hooks';
import { auth } from '@/auth';

const useSignUp = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [authId, setAuthId] = useState<string>('fffdafdasfafa');
  const [wait, setWait] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>('******');
  const [isOpen, handleModalOpen, handleModalClose] = useModal();
  const router = useRouter();
  const [createUserMutation] = useMutation(createUserQuery(name, authId));

  const handleSignUp = async () => {
    try {
      setWait(true);

      const res = await auth.signup(email, password);
      setAuthId(res.Id);

      await createUserMutation();
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
