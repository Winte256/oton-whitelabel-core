import * as React from 'react';

interface ICommonHeaderProps extends React.PropsWithChildren {

};

const CommonHeader: React.FunctionComponent<ICommonHeaderProps> = ({ children }) => {
    return (
      <header>
        header
      </header>
    );
  };
  
  export default CommonHeader;