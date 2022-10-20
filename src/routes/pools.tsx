import React from 'react';
import { Box, Grid } from '@mui/material';
import PoolsFilters from '../components/PoolsFilters';
import PoolsItem from '../components/PoolsItem';


type Props = {};

const Pools = (props: Props) => {
  return (
    <Box>
      <Box sx={{
        mb: '24px'
      }}>
        <PoolsFilters/>
        
        <Box sx={{
          mt: '24px',
        }}>
          <Grid
            container
            spacing={2}
            columns={{ xs: 1, sm: 2, md: 3, lg: 5, xl: 6 }}
          >
            {Array.from(Array(8)).map((_, index) => (
              <Grid item xs={1} key={index}>
                <PoolsItem/>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Pools;
