import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import BaseLayout from '../layout/Base';

const Root = () => {
  const linksList = ['/auth', '/auth/signin', '/auth/signup', '/dashboard'];
  return (
    <BaseLayout>
      <List
        sx={{
          width: 300,
          mb: '30px',
        }}
      >
        {linksList.map((to) => (
          <ListItem key={to} disablePadding>
            <ListItemButton
              component={NavLink}
              to={to}
              sx={{
                '&.active': {
                  bgcolor: 'action.selected',
                },
              }}
            >
              <ListItemText primary={to} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Outlet />
    </BaseLayout>
  );
};

export default Root;
