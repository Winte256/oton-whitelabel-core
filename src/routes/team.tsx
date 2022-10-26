import { Box} from '@mui/material'
import TeamStats from '../components/TeamStats';
import TeamTableHead from '../components/TeamTableHead';
import TeamTable from '../components/TeamTable';
import Cookies from 'js-cookie';
import useUserInfo from '../components/hooks/useUserInfo';
import fetcher from '../utils/fetcher';
import { useDispatch } from 'react-redux';
import { setBaseTree, addInnerTree } from '../store/modules/linear'
import useLinear from '../components/hooks/useLinear';


type Props = {};

const Team = (props: Props) => {
  const auth = Cookies.get('auth');
  const { user } = useUserInfo(auth);
  const { linear, isLoading, isError } = useLinear(user ? user.id : undefined);

  const dispatch = useDispatch()

  if (linear) {
    dispatch(setBaseTree(linear))
  }
  
  const fetchTeam = async (userId: number) => {
    if (!userId) {
      return;
    }
    const response = await fetcher({
      url: '/linear/data',
      data: {
        auth,
        user_id: user.id
      }
    });

    if (response) {
      dispatch(addInnerTree(response))
    }
  };

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
        <TeamTable />
      </Box>
    </Box>
  );
};

export default Team;
