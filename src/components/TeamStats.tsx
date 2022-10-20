import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import DashboardCard from '../components/DashboardCard';

type Props = {};

const TeamStats = (props: Props) => {
  const { t } = useTranslation('team');

  return (
    <Grid container spacing={3}>
      <Grid item sm={4}>
        <DashboardCard title={t('My team')}>
          <>
            <Typography sx={{
              fontSize: '24px'
            }}>
              13
            </Typography>
          </>
        </DashboardCard>
      </Grid>
      <Grid item sm={4}>
        <DashboardCard title={t('New in the last 7 days')}>
          <>
            <Typography sx={{
              fontSize: '24px'
            }}>
              13
            </Typography>
          </>
        </DashboardCard>
      </Grid>
      <Grid item sm={4}>
        <DashboardCard title={t('New in the last 14 days')}>
          <>
            <Typography sx={{
              fontSize: '24px'
            }}>
              13
            </Typography>
          </>
        </DashboardCard>
      </Grid>
    </Grid>
  );
};

export default TeamStats;