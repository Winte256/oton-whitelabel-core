import * as React from 'react';
import LanguageSwitcher from './LanguageSwitcher';

interface ICommonHeaderProps extends React.PropsWithChildren {}

const CommonHeader: React.FunctionComponent<ICommonHeaderProps> = ({
  children,
}) => {
  return (
    <header>
      <LanguageSwitcher />
    </header>
  );
};

export default CommonHeader;
