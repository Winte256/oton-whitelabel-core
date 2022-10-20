import * as React from 'react';
import {
  useNavigate,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Box } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import RefClipboard from './RefClipboard';


interface ICommonHeaderProps extends React.PropsWithChildren {}

const CommonHeader: React.FunctionComponent<ICommonHeaderProps> = ({
  children,
}) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handdleLogout = () => {
    navigate('/auth/signin');
    handleMenuClose();
  };
  const handleMenuHref = () => {
    navigate('/profile');
    handleMenuClose();
  };

  const menuId = 'primary-search-account-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuHref}>{t('Profile')}</MenuItem>
      <MenuItem onClick={handdleLogout}>{t('Log out')}</MenuItem>
    </Menu>
  );

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{
          justifyContent: 'space-between',
          bgcolor: 'background.header'
        }}>
          <RefClipboard refLink={'http://aton.com/ref/123JASDp24fqw'}/>

          <LanguageSwitcher />

          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};

export default CommonHeader;
