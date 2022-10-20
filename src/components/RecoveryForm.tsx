import { useTranslation } from 'react-i18next';
import { 
  Typography, 
  CardHeader, 
  CardContent, 
  TextField,
  Button,
  Divider,
  Link
} from '@mui/material';

type Props = {};

const RecoveryForm = (props: Props) => {
  const { t } = useTranslation('auth');

  return (
    <>
      <CardHeader
        title={
          <Typography sx={{
            color: 'primary.main'
          }}>
            {t('Password lost')}
          </Typography>
        }
      />
      <CardContent>
        <TextField 
          id="outlined-basic" 
          label={t('Username')} 
          variant="outlined"
          size="small"
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
          {t('Get new password')}
        </Button>
        <Divider
          orientation="horizontal"
          sx={{
            marginTop: '12px',
            marginBottom: '12px'
          }}
        />
        <Typography>
          {t('If you did not get a mail please check your span folder and your mailsettings.')}
        </Typography>
        <Link href="/auth/signin">
          {t('Back to login')}
        </Link>
      </CardContent>
    </>
  );
};

export default RecoveryForm;