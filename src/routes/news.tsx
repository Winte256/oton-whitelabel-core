import React from 'react';
import { useTranslation } from 'react-i18next';
import { Paper, Button, Box } from '@mui/material';
import NewsItem from '../components/NewsItem';

type Props = {};

const News = (props: Props) => {
  const { t } = useTranslation('news');

  return (
    <Paper elevation={0} sx={{ bgcolor: 'background.default', maxWidth: '732px' }}>
      <Box>
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </Box>
      <Button
        variant="outlined"
        sx={{
          textTransform: 'uppercase'
        }}
        onClick={() => {}}
      >
        {t('More')}
      </Button>
    </Paper>
  );
};

export default News;
