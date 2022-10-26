import { Outlet, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import BaseLayout from '../layout/Base';

const Root = () => {
  const hasAuth = Cookies.get('auth');
  
  if (!hasAuth) {
    return <Navigate to="/auth/signin" />;
  }
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  );
};

export default Root;
