import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardMedia } from '@mui/material';
import logo from "../assest/logo.png";

const Footer = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <div style={{ height: '60vh', /* Sayfa içeriği burada yer alacak */ }} />

      <Toolbar
        sx={{
          backgroundColor: "#b388ff",
          width: "100%",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'sticky',
          bottom: 0,
          zIndex: 1000,
          height: 80,
        }}
      >
        <Typography variant="body1" color="inherit" sx={{ color: "white" }}>
          Copyright © 2023   ❤︎   Developed By Nihal Tekin
        </Typography>
      </Toolbar>
    </Box>
  );
};

export default Footer;
