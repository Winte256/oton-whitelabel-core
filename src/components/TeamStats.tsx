import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import DashboardCard from '../components/DashboardCard';
import useLinearStats from './hooks/useLinearStats';

type Props = {};

const TeamStats = (props: Props) => {
  const { t } = useTranslation('team');
  const { stats, isLoading, isError } = useLinearStats();

  return (
    <Grid container spacing={3}>
      <Grid item sm={4}>
        <DashboardCard title={t('My team')}>
          <>
            <Typography sx={{
              fontSize: '24px'
            }}>
              { stats && stats.all }
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
              { stats && stats.week }
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
              { stats && stats['2week'] }
            </Typography>
          </>
        </DashboardCard>
      </Grid>
    </Grid>
  );
};

export default TeamStats;