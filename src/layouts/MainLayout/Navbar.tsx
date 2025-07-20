import {Box, Button, Menu, MenuItem} from '@mui/material';
import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (path?: string) => {
    setAnchorEl(null);
    if (path) navigate(path);
  };
  return (
    <Box
      component="nav"
      sx={{
        borderRadius: 2,
        color: 'black',
        backgroundColor: 'lavender',
        px: 2,
        py: 1,
        display: 'flex',
        flexDirection: 'row',
        gap: 1,
      }}
    >
      <Button component={Link} to="/home" color="inherit">Trang chủ</Button>
            <Button
        color="inherit"
        onClick={handleMenuOpen}
        sx={{ color: 'black', textTransform: 'none' }}
      >
        SẢN PHẨM
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleMenuClose()}
      >
        <MenuItem onClick={() => handleMenuClose('/earphone')}>
          Tai nghe
        </MenuItem>
        <MenuItem onClick={() => handleMenuClose('/phone')}>
        Điện thoại
        </MenuItem>
        <MenuItem onClick={() => handleMenuClose('/case')}>
        Ốp lưng
        </MenuItem>
        <MenuItem onClick={() => handleMenuClose('/chargingcord')}>
        Cáp sạc
        </MenuItem>
      </Menu>
      <Button component={Link} to="/settings" color="inherit">Cài đặt</Button>
      <Button component={Link} to="/login" color="inherit">Đăng xuất</Button>
      {/* <Button component={Link} to="/login" color="inherit">Đăng xuất</Button> */}

    </Box>
  );
};

export default Navbar;
