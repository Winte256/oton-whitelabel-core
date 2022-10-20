import { Box } from '@mui/system';
import CommonCard from '../../components/CommonCard';
import SignUpForm from '../../components/SignUpForm';

type Props = {};

const Signup = (props: Props) => {
  return (
    <Box sx={{
      display: 'flex',
      'justifyContent': 'center',
    }}>
      <Box sx={{
        marginTop: '30vh'
      }}>
        <CommonCard fixedWidth={354} bgColor={'background.default'}>
          <SignUpForm/>  
        </CommonCard>
      </Box>
    </Box>
  );
};

export default Signup;
