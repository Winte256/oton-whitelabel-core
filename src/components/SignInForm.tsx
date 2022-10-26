import { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'
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
import fetcher from '../utils/fetcher';
import { useSnackbar } from 'notistack';

type Props = {};

const SignInForm = (props: Props) => {
  const { t } = useTranslation('auth');
  const [ login, setLogin ] = useState('');
  const [ password, setPassword ] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (login.trim() && password.trim()) {
      const fetchAuth = await fetcher({
        url: '/signIn',
        data: {
          login,
          password
        }
      });

      if (fetchAuth && fetchAuth.auth) {
        Cookies.set('auth', fetchAuth.auth, { expires: 30 });
        
        return navigate("/dashboard");
      }
    } 
    if (!login) {
      enqueueSnackbar(t('Login cannot be empty'), {
        variant: 'error'
      });
    } 
    if (!password) {
      enqueueSnackbar(t('Password cannot be empty'), {
        variant: 'error'
      });
    } 
  }

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
          value={login}
          onChange={(e) => setLogin(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <Button
          variant="contained"
          sx={{
            textTransform: 'uppercase'
          }}
          onClick={handleLogin}
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