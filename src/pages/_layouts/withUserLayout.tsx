import { NAV_ITEMS } from '@/consts';
import { Layout } from '@templates';
import Provider from '@/providers';

const withGuestLayout = (
  Page: {
    (): JSX.Element;
    getLayout?(page: React.ReactElement): JSX.Element;
  },
  title: string,
) => {
  const UserLayout = (page: React.ReactElement) => {
    return (
      <Provider>
        <Layout menu={NAV_ITEMS.USER} title={title}>
          {page}
        </Layout>
      </Provider>
    );
  };

  Page.getLayout = UserLayout;

  return Page;
};

export default withGuestLayout;
