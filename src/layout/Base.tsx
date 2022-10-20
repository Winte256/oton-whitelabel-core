import * as React from 'react';
import { Drawer, Box } from '@mui/material';
// import CommonFooter from '../components/CommonFooter';
import CommonHeader from '../components/CommonHeader';
import CommonSidebar from '../components/CommonSidebar';

interface IBaseLayoutProps extends React.PropsWithChildren {
  
}

const drawerWidth = 240;

const BaseLayout: React.FunctionComponent<IBaseLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', bgcolor: 'background.default' }}>
      <Drawer 
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <CommonSidebar/>
      </Drawer>
      <Box  sx={{ flexGrow: 1, bgcolor: 'background.default'}}>
        <CommonHeader></CommonHeader>
        <Box sx={{
          p: '24px',
        }}>
          {children}
        </Box>
      </Box>
      {/* <CommonFooter></CommonFooter> */}
    </Box>
  );
};

export default BaseLayout;
