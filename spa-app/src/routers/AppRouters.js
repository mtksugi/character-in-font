import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple, blue } from '@mui/material/colors';
import { Container } from '@mui/material';

import Home from '../components/Home';
import Header from '../components/Header';
import Contact from '../components/Contact';
import NotFoundPage from '../components/NotFoundPage';

const theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: blue,
  },
});

const AppRouter = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Container>
    </ThemeProvider>
  </BrowserRouter>
)

export default AppRouter