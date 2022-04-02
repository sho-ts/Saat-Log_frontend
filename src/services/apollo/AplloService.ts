import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  NormalizedCacheObject,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

class ApolloService {
  client: ApolloClient<NormalizedCacheObject>;

  constructor() {
    const httpLink = createHttpLink({
      uri: 'http://localhost:3001/graphql',
    });

    const authLink = setContext((_, { headers }) => {
      const token = localStorage.getItem('idToken');

      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        },
      };
    });

    this.client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
  }
}

export default ApolloService;
