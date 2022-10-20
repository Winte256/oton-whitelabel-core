import { Box} from '@mui/material'
import TeamStats from '../components/TeamStats';
import TeamTableHead from '../components/TeamTableHead';
import TeamTable from '../components/TeamTable';


type Props = {};

const Team = (props: Props) => {

  return (
    <Box sx={{
      maxWidth: '732px'
    }}>
      <Box sx={{
        mb: '24px'
      }}>
        <TeamStats/>
      </Box>
      <Box sx={{
        mb: '24px'
      }}>
        <TeamTableHead/>
      </Box>
      <Box>
        <TeamTable/>
      </Box>
    </Box>
  );
};

export default Team;
