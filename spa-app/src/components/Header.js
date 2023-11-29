import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} 
            alignItems={{ xs: 'stretch', md: 'flex-end' }} justifyContent="start" 
            sx={{ flexGrow: 1 }} 
      >
        <Typography variant="h5" component={NavLink} to="/" sx={{ color: 'inherit', textDecoration: 'none', mr: { md: 2 } }}>
          FontGlyph Revealer
        </Typography>
        <Typography variant="subtitle2" sx={{ color: 'inherit' }}>
          フォントの中の文字を調べる
        </Typography>
      </Box>
      <Button color="inherit" component={NavLink} to="/contact">
        お問い合わせ
      </Button>
    </Toolbar>
  </AppBar>
)

export default Header;
