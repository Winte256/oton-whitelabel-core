import React from 'react';
import { Outlet } from 'react-router-dom';

type Props = {};

const Auth = (props: Props) => {
  return (
    <div>
      Auth page
      <Outlet />
    </div>
  );
};

export default Auth;
