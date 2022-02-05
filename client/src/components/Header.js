import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, MenuItem, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar sx={{ px: 1 }}>
      <Toolbar disableGutters={true}>
        <Typography variant="h4" textAlign="left" sx={{ m: 2, flexGrow: 1 }}>
          StillGood
        </Typography>
        <MenuItem component={Link} to="/">
          Welcome
        </MenuItem>

        <MenuItem component={Link} to="/itemlist" margin={3}>
          ItemList
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
