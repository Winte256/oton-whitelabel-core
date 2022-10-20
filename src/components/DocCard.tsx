import { Card, Link, Typography } from '@mui/material';

type Props = {
  title: string,
  url: string
};

const DocCard = (props: Props) => {
  const { title, url } = props
  return (
    <Link target="_blank" href={ url }>
      <Card>
        <Typography>{ title }</Typography>
      </Card>
    </Link>
  )
};

export default DocCard;