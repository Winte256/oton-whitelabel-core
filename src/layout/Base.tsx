import * as React from 'react';

interface IBaseLayoutProps {}

const BaseLayout: React.FC<IBaseLayoutProps> = ({ children }) => {
  return (
    <>
      <CommonHeader></CommonHeader>
      {children}
      <CommonFooter></CommonFooter>
    </>
  );
};

export default BaseLayout;
