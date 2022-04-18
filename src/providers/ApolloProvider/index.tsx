import { ApolloProvider as Provider } from '@apollo/client';
import useApolloProviderModule from './apolloProvider.module';

const ApolloProvider: React.VFC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const { apolloService } = useApolloProviderModule();

  return <Provider client={apolloService.client}>{children}</Provider>;
};

export default ApolloProvider;
