import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import css from './Layout.module.css';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
// import Box from '@mui/material/Box';
import { Box, ListItem } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#424242',
    },
    secondary: blueGrey,
  },
});

export const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          padding: '10px 20px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '100px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <NavLink to="/">
            <HomeIcon
              sx={{
                color: 'primary.main',
                fontSize: '46px',
              }}
            />
          </NavLink>
          <h1 className={css.header}>Phonebook</h1>
          <NavLink to="menu">
            <PersonIcon
              sx={{
                color: 'primary.main',
                fontSize: '46px',
              }}
            />
          </NavLink>
        </Box>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Box>
    </ThemeProvider>
  );
};
