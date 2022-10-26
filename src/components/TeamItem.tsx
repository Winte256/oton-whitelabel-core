import { TreeItem } from "@mui/lab";
import { pathOr } from "rambda";
import { useSelector } from "react-redux";
import { RootState } from "../store";

type Props = {
  user: any,
};

type ItemProps = {
  id: number,
  label: string,
  rank: string
}
const TableItem = ({id, label, rank}: ItemProps) => (
  <div>
    <span>{id}</span>
    <span>{label}</span>
    <span>{rank}</span>
  </div>
);

const TeamItem = (props: Props) => {
  const { user } = props;
  const innerTree = useSelector((state: RootState) => state.linear.innerTree);

  const childItems = innerTree[user.id] ? innerTree[user.id] : [];

  return (
    <TreeItem nodeId={user.id} label={
      <TableItem id={user.id} label={user.email} rank={user.rank.title}/>
    }>
      {
        childItems.map((item: any) => (
          <TeamItem user={item.id}/>
        ))
      }
    </TreeItem>
  );
};

export default TeamItem;