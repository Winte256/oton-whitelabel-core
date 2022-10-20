import { Box, LinearProgress, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

type Props = {};

const PoolItemBlock = (props: Props) => {
  return (
    <Box sx={{ width: '100%', display: 'flex'}}>
      <Box >
        <CheckIcon/>
      </Box>
      <Box sx={{ml: '6px', width: '100%'}}>
        <Box sx={{ display: 'flex' }}>
          <Typography sx={{fontSize: '10px', fontWeight: 500}}>Own user level</Typography>
          <Typography sx={{fontSize: '10px', fontWeight: 500, ml: '4px', color: 'primary.main'}}>Partner</Typography>
        </Box>
        <LinearProgress sx={{mt: '2px'}} variant="determinate" value={34} />
      </Box>
    </Box>
  );
};

export default PoolItemBlock;