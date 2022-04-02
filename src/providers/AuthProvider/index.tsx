import useAuthProvider from './AuthProvider.hook';

const AuthProvider: React.FC = ({ children }) => {
  const { isChecked } = useAuthProvider();

  return isChecked ? <>{children}</> : <></>;
};

export default AuthProvider;
