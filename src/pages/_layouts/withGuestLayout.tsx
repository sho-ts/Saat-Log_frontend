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
  const GuestLayout = (page: React.ReactElement) => {
    return (
      <Provider isGuest>
        <Layout menu={NAV_ITEMS.GUEST} title={title}>
          {page}
        </Layout>
      </Provider>
    );
  };

  Page.getLayout = GuestLayout;

  return Page;
};

export default withGuestLayout;
