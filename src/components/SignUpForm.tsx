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

const SignUpForm = (props: Props) => {
  const { t } = useTranslation('auth');

  return (
    <>
      <CardHeader
        title={
          <Typography sx={{
            color: 'primary.main'
          }}>
            {t('Welcome')}
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
        <TextField 
          id="outlined-basic" 
          label={t('Repeat password')} 
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
          {t('Sign up')}
        </Button>
        <Divider
          orientation="horizontal"
          sx={{
            marginTop: '12px',
            marginBottom: '12px'
          }}
        />
        <Typography>
          {t('Do you have an account?')}
          {' '}
          <Link href="/auth/signin">
            {t('Log in')}
          </Link>
        </Typography>
        
      </CardContent>
    </>
  );
};

export default SignUpForm;