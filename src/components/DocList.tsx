import React from 'react';
import { Box, Typography } from '@mui/material';

interface Props extends React.PropsWithChildren {
  title: React.ReactNode;
};

const DocList = (props: Props) => {
  const { children, title } = props;

  console.log(children)
  return (
    <Box>
      <Typography sx={{
        fontSize: '20px',
        fontWeight: 500,
        ':first-letter': {
          textTransform: 'uppercase'
        }
      }}>
        { title }
      </Typography>
      <Box>
        { children }
      </Box>
    </Box>
  )
};

export default DocList;