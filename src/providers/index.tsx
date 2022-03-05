import ReduxProvider from './ReduxProvider';
import ApolloProvider from './ApolloProvider';

const Provider: React.FC = ({ children }) => (
  <ReduxProvider>
    <ApolloProvider>{children}</ApolloProvider>
  </ReduxProvider>
);

export { default as AuthProvider } from './AuthProvider';
export default Provider;
