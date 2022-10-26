import { TreeView, TreeItem } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useLinear from './hooks/useLinear';
import useUserInfo from './hooks/useUserInfo';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import TeamItem from './TeamItem';

type Props = {};

const TeamTable = (props: Props) => {
  const baseTree = useSelector((state: RootState) => state.linear.baseTree);
  console.log(baseTree);

  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{
        color: '#fff',
      }}
    >
      {
        baseTree.map((user) => (
          <TeamItem user={user}/>
        ))
      }
      {/* <TreeItem nodeId="1" label={<TableItem id={1} label={'Jose'} rank={'21'}/>}>
        <TreeItem nodeId="2" label="Alvarez" />
      </TreeItem>
      <TreeItem nodeId="5" label="John">
        <TreeItem nodeId="10" label="Donnie" />
        <TreeItem nodeId="6" label="Javier">
          <TreeItem nodeId="8" label="Paul" />
        </TreeItem>
      </TreeItem> */}
    </TreeView>
  );
};

export default TeamTable;