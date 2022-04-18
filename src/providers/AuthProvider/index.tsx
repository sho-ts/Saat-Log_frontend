import useAuthProvider from './AuthProvider.hook';

const AuthProvider: React.VFC = ({ children }) => {
  const { isChecked } = useAuthProvider();

  return isChecked ? <>{children}</> : <></>;
};

export default AuthProvider;
