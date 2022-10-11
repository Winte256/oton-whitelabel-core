import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Card, 
  Typography, 
  CardHeader, 
  CardContent, 
  TextField,
  Button,
  Divider
} from '@mui/material';

type Props = {
  maxWidth?: string | number;
  fixedWidth?: number | string;
  bgColor?: string;
};

const CommonCard = (props: Props) => {
  const { t } = useTranslation('auth');
  const { maxWidth, bgColor, fixedWidth } = props;


  return (
    <div>
      <Card sx={{ maxWidth, bgColor, width: fixedWidth }}>
        <CardHeader
          title={
            <Typography sx={{
              color: 'primary.main'
            }}>
              {t('Welcome back')}
            </Typography>
          }
        />
        <CardContent>
          <TextField 
            id="outlined-basic" 
            label={t('Username')} 
            variant="outlined" 
            sx={{
              width: '100%',
              marginBottom: '12px',
            }}
          />
          <TextField 
            id="outlined-basic" 
            label={t('Password')} 
            variant="outlined"
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
            type="password"
            sx={{
              width: '100%',
              marginBottom: '12px',
            }}
          />
          <Button
            variant="contained"
            sx={{
              textTransform: 'uppercase'
            }}
          >
            {t('Sign up')}
          </Button>
          <Divider
            orientation="horizontal"
            sx={{
              marginTop: '12px',
              marginBottom: '12px'
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default CommonCard;