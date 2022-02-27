import ReduxProvider from './ReduxProvider';

type Props = {
  isGuest?: boolean;
};

const Provider: React.FC<Props> = ({ isGuest, children }) => (
  <ReduxProvider>{children}</ReduxProvider>
);

export default Provider;
