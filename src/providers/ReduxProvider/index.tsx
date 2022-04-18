import { Provider } from 'react-redux';
import { store } from '@/stores';

const ReduxProvider: React.VFC = ({ children }) => <Provider store={store}>{children}</Provider>;

export default ReduxProvider;
