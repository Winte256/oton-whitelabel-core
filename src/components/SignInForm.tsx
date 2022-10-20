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

const SignInForm = (props: Props) => {
  const { t } = useTranslation('auth');

  return (
    <>
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
          size="small"
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
          {t('Login')}
        </Button>
        <Divider
          orientation="horizontal"
          sx={{
            marginTop: '12px',
            marginBottom: '12px'
          }}
        />
        <Typography>
          {t('Lost your password?')}
          {' '}
          <Link href="/auth/recovery">
            {t('Recover password')}
          </Link>
        </Typography>
        <Typography>
          {t('First time?')}
          {' '}
          <Link href="/auth/signup">
            {t('Sign up')}
          </Link>
        </Typography>
      </CardContent>
    </>
  );
};

export default SignInForm;