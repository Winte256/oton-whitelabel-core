import { Box } from '@mui/system';
import CommonCard from '../../components/CommonCard';
import RecoveryForm from '../../components/RecoveryForm';

type Props = {};

const Recovery = (props: Props) => {
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
            <RecoveryForm/>  
          </CommonCard>
        </Box>
      </Box>
    </div>
  );
};

export default Recovery;
