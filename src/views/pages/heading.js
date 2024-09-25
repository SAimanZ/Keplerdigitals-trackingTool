import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import kepler from '../../assets/kepler.svg';
import { Link as RouterLink } from 'react-router-dom';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="Appstyle">
        <Toolbar>
          <Typography component={RouterLink} to={'/'} variant="h6" sx={{ flexGrow: 1 }}>
            <img src={kepler} alt="Logo" style={{ width: '140px' }} />
          </Typography>
          <Button className="navbar-heading" as={RouterLink} to="https://www.keplerdigitals.io/" target="_blank">
            About Us
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
