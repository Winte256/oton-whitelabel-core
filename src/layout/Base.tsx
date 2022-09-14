import * as React from 'react';
import CommonFooter from '../components/CommonFooter';
import CommonHeader from '../components/CommonHeader';

interface IBaseLayoutProps extends React.PropsWithChildren {
  
}

const BaseLayout: React.FunctionComponent<IBaseLayoutProps> = ({ children }) => {
  return (
    <>
      <CommonHeader></CommonHeader>
      {children}
      <CommonFooter></CommonFooter>
    </>
  );
};

export default BaseLayout;
