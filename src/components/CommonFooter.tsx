import * as React from 'react';

interface ICommonFooterProps extends React.PropsWithChildren {

};

const CommonFooter: React.FunctionComponent<ICommonFooterProps> = ({ children }) => {
    return (
      <header>
        footer
      </header>
    );
  };
  
  export default CommonFooter;