// src/layouts/MainLayout/Header.tsx
import { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from './Navbar';

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleNavbar = () => setOpen(prev => !prev);

  return (
    <Box component="header" 
    sx={{ 
      backgroundColor: 'rgba(138, 43, 226, 0.2)', 
      borderRadius: 2,
      }}>
      <AppBar position="static" sx={{ backgroundColor: 'white', color: '#333', borderRadius: 2 }}>
        <Toolbar>
          <img src="/W.png" alt="Mô tả ảnh" style={{ width: '7%', borderRadius: '80px' }} />
          <IconButton edge="end" color="inherit" onClick={toggleNavbar}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {open && <Navbar />}
    </Box>
  );
};

export default Header;
