import { TreeView, TreeItem } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

type Props = {};

type ItemProps = {
  id: number,
  label: string
}
const TableItem = ({id, label}: ItemProps) => (
  <div>
    <span>{id}</span>
    <span>{label}</span>
  </div>
);

const TeamTable = (props: Props) => {
  
  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{
        color: '#fff',
      }}
    >
      <TreeItem nodeId="1" label={<TableItem id={1} label={'Jose'}/>}>
        <TreeItem nodeId="2" label="Alvarez" />
      </TreeItem>
      <TreeItem nodeId="5" label="John">
        <TreeItem nodeId="10" label="Donnie" />
        <TreeItem nodeId="6" label="Javier">
          <TreeItem nodeId="8" label="Paul" />
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
};

export default TeamTable;