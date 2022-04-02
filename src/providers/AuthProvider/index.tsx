import useAuthProvider from './authProvider.hook';

const AuthProvider: React.FC = ({ children }) => {
  const { isChecked } = useAuthProvider();

  return isChecked ? <>{children}</> : <></>;
};

export default AuthProvider;
