import React from 'react';
import { Card } from '@mui/material';

interface Props extends React.PropsWithChildren {
  maxWidth?: string | number;
  fixedWidth?: number | string;
  bgColor?: string;
};

const CommonCard = (props: Props) => {
  const { maxWidth, bgColor, fixedWidth, children } = props;

  return (
    <Card sx={{ 
      maxWidth, 
      backgroundColor: bgColor, 
      width: fixedWidth,
      boxShadow: '0px 1px 0px #FFE86B'
    }}>
      {children}
    </Card>
  );
};

export default CommonCard;