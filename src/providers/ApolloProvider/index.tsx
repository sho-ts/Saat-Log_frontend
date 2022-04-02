import { ApolloProvider as Provider } from '@apollo/client';
import useApolloProviderModule from './apolloProvider.module';

const ApolloProvider: React.FC = ({ children }) => {
  const { apolloService } = useApolloProviderModule();

  return <Provider client={apolloService.client}>{children}</Provider>;
};

export default ApolloProvider;
