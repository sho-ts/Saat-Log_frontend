import ReduxProvider from './ReduxProvider';

const Provider: React.FC = ({ children }) => <ReduxProvider>{children}</ReduxProvider>;

export { default as AuthProvider } from './AuthProvider';
export default Provider;
