import { NAV_ITEMS } from '@/consts';
import { Layout } from '@templates';

const withGuestLayout = (
  Page: {
    (): JSX.Element;
    getLayout?(page: React.ReactElement): JSX.Element;
  },
  title: string,
) => {
  const UserLayout = (page: React.ReactElement) => {
    return (
      <Layout menu={NAV_ITEMS.USER} title={title}>
        {page}
      </Layout>
    );
  };

  Page.getLayout = UserLayout;

  return Page;
};

export default withGuestLayout;
