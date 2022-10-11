import React from 'react';
import { useTranslation } from 'react-i18next';
import { styled, Box, Stack } from '@mui/system';
import CommonCard from '../../components/CommonCard';

type Props = {};

const Signin = (props: Props) => {
  const { t } = useTranslation('auth');
  return (
    <div>
      <Box sx={{
        display: 'flex',
        'justifyContent': 'center'
      }}>
        <CommonCard fixedWidth={354} bgColor={'background.default'}/>
      </Box>
    </div>
  );
};

export default Signin;
