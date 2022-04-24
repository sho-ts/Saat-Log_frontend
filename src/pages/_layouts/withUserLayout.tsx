import { NAV_ITEMS } from '@/consts';
import { Layout } from '@templates';
import { AuthProvider } from '@/providers';

const withUserLayout = (
  Page: {
    (): JSX.Element;
    getLayout?(page: React.ReactElement): JSX.Element;
  },
  title?: string,
) => {
  const UserLayout = (page: React.ReactElement) => {
    return (
      <AuthProvider>
        <Layout menu={NAV_ITEMS.USER} title={title}>
          {page}
        </Layout>
      </AuthProvider>
    );
  };

  Page.getLayout = UserLayout;

  return Page;
};

export default withUserLayout;
