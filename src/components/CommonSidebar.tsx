import React, { useContext } from 'react';
import { pathOr } from 'rambda';
import { useTranslation } from 'react-i18next';
import { 
  Box,
  Link,
  MenuItem,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Config } from '../App';

type Props = {};

const CommonSidebar: React.FunctionComponent<Props> = () => {
  const { t } = useTranslation();
  const config = useContext(Config)
  const menuList = pathOr([], ['company', 'menu'], config);
  const assetsUrl = pathOr('', ['env', 'assetsServer'], config);

  return (
    <>
      <Box sx={{
        minHeight: 55
      }}>
        <Link href="/dashboard">

        </Link>
      </Box>
      <List component="ul" sx={{
        pr: '16px',
        pl: '8px'
      }}>
        {
          menuList.map(({title, name, to}) => (
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
                <ListItemIcon>
                  <img src={`${assetsUrl}/images/core-menu-${name}.svg`} alt="" />
                </ListItemIcon>
                <ListItemText primary={t(title)} />
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
    </>
  );
};

export default CommonSidebar;