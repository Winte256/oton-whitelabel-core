import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Grid, Typography } from '@mui/material';
import DashboardCard from '../components/DashboardCard';


type Props = {};

const Dashboard = (props: Props) => {
  const { t } = useTranslation('dashboard');
  
  return (
    <Box sx={{
      maxWidth: '732px'
    }}>
      <Grid container spacing={3}>
        <Grid item sm={6}>
          <DashboardCard title={t('Available balance')}>
            <>
              <Typography sx={{
                fontSize: '24px'
              }}>
                0.00000123
              </Typography>
              <Typography sx={{
                fontSize: '20px',
                opacity: 0.4,
                ml: '8px',
                fontWeight: 500
              }}>
                34 552 USDT
              </Typography>
            </>
          </DashboardCard>
        </Grid>
        <Grid item sm={6}>
          <DashboardCard title={t('Position')}>
            <>
              <Typography sx={{
                fontSize: '24px'
              }}>
                Vice President
              </Typography>
            </>
          </DashboardCard>
        </Grid>
        <Grid item sm={12}>
          <DashboardCard title={t('CS Wallet App')}>
            <>
              <Typography sx={{
                fontSize: '24px'
              }}>
                Some apps
              </Typography>
            </>
          </DashboardCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
