import { Box, Typography } from '@mui/material';

type Props = {};

const NewsItem = (props: Props) => {
  
  return (
    <Box sx={{
      mb: '32px'
    }}>
      <Typography sx={{
        fontSize: '12px',
        opacity: 0.7
      }}>
        23 october 2022
      </Typography>
      <Typography sx={{
        mb: '16px',
        fontSize: '20px'
      }}>
        Hash Telegraph presents a column of IT entrepreneur Anton Elston
      </Typography>
      <Typography sx={{
        fontSize: '14px'
      }}>
        In 2017, Anton led the IT expertise in our joint project Hash Rating , that provided deep analytics of 72 blockchain projects.

Anton has been involved in IT and software development for over 17 years. For the past 5 years, he has been developing blockchain technologies to solve problems in the affiliate marketing business - accrual of affiliate rewards, selling goods on the OTON marketplace, as well as creating communication funnels with an audience of leaders, bloggers and influencers. The OTON blockchain covers an audience in over 12 countries around the world.

At the end of last year, Anton became a co-founder of the new DEXART metaverse project. The team is preparing a custom solution for representing business in the metaverse, new tools for interacting with communities and educational projects.

In 2022, the DEXART team took 2nd place at the "Definition Hackathon" with a project that automates candidates scoring for Sanctor game account management
      </Typography>
    </Box>
  );
};

export default NewsItem;