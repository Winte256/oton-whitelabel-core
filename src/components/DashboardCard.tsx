import React from 'react';
import { CardHeader, CardContent } from '@mui/material';
import CommonCard from '../components/CommonCard';


interface Props extends React.PropsWithChildren {
  title: React.ReactNode,
};

const DashboardCard = (props: Props) => {
  const { title, children } = props;
  
  return (
    <CommonCard bgColor={"background.card"}>
      <CardHeader 
        sx={{
          pt: '4px',
          pb: 0
        }}
        titleTypographyProps={{
          fontSize: '16px',
          color: 'primary.main',
          
        }}
        title={title}
      />
      <CardContent sx={{
        pt: '8px',
        pb: '16px!important',
        display: 'flex',
        alignItems: 'center'
      }}>
        {children}
      </CardContent>
    </CommonCard>
  )
};

export default DashboardCard;