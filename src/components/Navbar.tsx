import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar 
      position="fixed" 
      sx={{
        background: isScrolled ? 'rgb(20, 20, 20)' : 'transparent',
        backgroundImage: isScrolled ? 'none' : 'linear-gradient(180deg, rgba(0,0,0,0.7) 10%, transparent)',
        boxShadow: 'none',
        transition: 'background-color 0.3s ease'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/netflix-logo.png"
            alt="Netflix"
            style={{ height: '25px', marginRight: '20px', objectFit: 'contain' }}
          />
          <Button color="inherit">Home</Button>
          <Button color="inherit">TV Shows</Button>
          <Button color="inherit">Movies</Button>
          <Button color="inherit">New & Popular</Button>
          <Button color="inherit">My List</Button>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <Avatar 
            sx={{ width: 32, height: 32 }}
            alt="Profile"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 