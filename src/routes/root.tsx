import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';

const Root = () => {
  const linksList = ['/auth', '/auth/signin', '/auth/signup', '/dashboard'];
  return (
    <>
      <List
        sx={{
          width: 300,
          mb: '30px',
        }}
      >
        {linksList.map((to) => (
          <ListItem disablePadding>
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
    </>
  );
};

export default Root;
