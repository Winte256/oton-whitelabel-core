import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Paper, TextField, Button } from '@mui/material';

type Props = {};

const Profile = (props: Props) => {
  const { t } = useTranslation('profile');

  return (
    <Paper elevation={0} sx={{ bgcolor: 'background.default' }}>
      <Box sx={{
        width: '322px',
        mb: '24px'
      }}>
        <Typography sx={{fontSize: '20px', mb: '12px'}}>{t('Info')}</Typography>
        <TextField 
          id="outlined-basic" 
          label={t('Nickname')} 
          variant="outlined"
          size="small"
          sx={{
            width: '100%',
            marginBottom: '12px',
          }}
        />
        <TextField 
          id="outlined-basic" 
          label={t('Email')} 
          variant="outlined"
          size="small"
          type="email"
          sx={{
            width: '100%',
            marginBottom: '12px',
          }}
        />
        <TextField 
          id="outlined-basic" 
          label={t('BEP20 address')} 
          variant="outlined"
          size="small"
          multiline={true}
          sx={{
            width: '100%',
            marginBottom: '12px',
          }}
        />
        <Button
          variant="outlined"
          sx={{
            textTransform: 'uppercase'
          }}
          onClick={() => {}}
        >
          {t('Save changes')}
        </Button>
      </Box>
      <Box sx={{
        width: '322px',
        mb: '24px'
      }}>
        <Typography sx={{fontSize: '20px', mb: '12px'}}>{t('Password')}</Typography>
        <TextField
          id="outlined-basic" 
          label={t('New password')} 
          variant="outlined"
          size="small"
          type="password"
          sx={{
            width: '100%',
            marginBottom: '12px',
          }}
        />
        <TextField
          id="outlined-basic" 
          label={t('Repeat password')} 
          variant="outlined"
          size="small"
          type="password"
          sx={{
            width: '100%',
            marginBottom: '12px',
          }}
        />
        <Button
          variant="outlined"
          sx={{
            textTransform: 'uppercase'
          }}
          onClick={() => {}}
        >
          {t('Change password')}
        </Button>
      </Box>
      <Box sx={{
        width: '322px',
        mb: '24px'
      }}>
        <Typography sx={{fontSize: '20px', mb: '12px'}}>{t('Wallet Address')}</Typography>
        <TextField 
          id="outlined-basic" 
          label={t('WalletAddress')} 
          variant="outlined"
          size="small"
          multiline={true}
          sx={{
            width: '100%',
            marginBottom: '12px',
          }}
        />
        <Button
          variant="outlined"
          sx={{
            textTransform: 'uppercase'
          }}
          onClick={() => {}}
        >
          {t('Connect')}
        </Button>
      </Box>
      <Box sx={{
        width: '322px',
        mb: '24px'
      }}>
        <Typography sx={{fontSize: '20px', mb: '12px'}}>{t('KYC')}</Typography>
        <Button
          variant="contained"
          sx={{
            textTransform: 'uppercase'
          }}
          onClick={() => {}}
        >
          {t('Go through kyc')}
        </Button>
      </Box>
    </Paper>
  );
};

export default Profile;
