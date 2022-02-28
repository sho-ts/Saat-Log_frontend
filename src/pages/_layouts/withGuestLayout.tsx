import { NAV_ITEMS } from '@/consts';
import { Layout } from '@templates';

const withGuestLayout = (
  Page: {
    (): JSX.Element;
    getLayout?(page: React.ReactElement): JSX.Element;
  },
  title: string,
) => {
  const GuestLayout = (page: React.ReactElement) => {
    return (
      <Layout menu={NAV_ITEMS.GUEST} title={title}>
        {page}
      </Layout>
    );
  };

  Page.getLayout = GuestLayout;

  return Page;
};

export default withGuestLayout;
