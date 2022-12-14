import { useTranslation } from 'react-i18next';
import { Box } from '@mui/system';
import CommonCard from '../../components/CommonCard';
import SignInForm from '../../components/SignInForm';

type Props = {};

const Signin = (props: Props) => {
  const { t } = useTranslation('auth');
  return (
    <div>
      <Box sx={{
        display: 'flex',
        'justifyContent': 'center'
      }}>
        <Box sx={{
          marginTop: '30vh'
        }}>
          <CommonCard fixedWidth={354} bgColor={'background.default'}>
            <SignInForm/>  
          </CommonCard>
        </Box>
      </Box>
    </div>
  );
};

export default Signin;
