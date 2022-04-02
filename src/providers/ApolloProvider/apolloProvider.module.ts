import { ApolloService } from '@/services';

const useApolloProviderModule = () => {
  return {
    apolloService: new ApolloService(),
  };
};

export default useApolloProviderModule;
