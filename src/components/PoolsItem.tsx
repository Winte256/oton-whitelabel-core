import React from 'react';
import { CardHeader, CardContent } from '@mui/material';
import CommonCard from '../components/CommonCard';
import PoolItemBlock from './PoolItemBlock';


interface Props extends React.PropsWithChildren {
  title?: React.ReactNode,
};

const PoolsItem = (props: Props) => {
  // const { title, children } = props;

  return (
    <CommonCard bgColor={"background.card"}>
      <CardHeader 
        sx={{
          pt: '8px',
          pb: 0
        }}
        title={'Pool 1'}
        subheader={'1391 users'}
        titleTypographyProps={{
          fontSize: '16px',
          color: 'primary.main',
          
        }}
        subheaderTypographyProps={{
          fontSize: '14px',
        }}
      />
      <CardContent sx={{
        pt: '8px',
        pb: '16px!important',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '& > div:not(:last-of-type)': {
          marginBottom: '10px'
        }
      }}>
        <PoolItemBlock />
        <PoolItemBlock />
        <PoolItemBlock />
        <PoolItemBlock />
      </CardContent>
    </CommonCard>
  );
};

export default PoolsItem;