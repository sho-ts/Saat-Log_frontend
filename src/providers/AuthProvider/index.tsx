import useAuthProvider from './authProvider.hook';

const AuthProvider: React.VFC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const { isChecked } = useAuthProvider();

  return isChecked ? <>{children}</> : <></>;
};

export default AuthProvider;
