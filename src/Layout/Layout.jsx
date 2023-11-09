import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import css from './Layout.module.css';

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { Box } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

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
                borderRadius: '50%',
                backgroundColor: 'hsla(225, 43%, 40%, 0.306)',
                '&:hover': {
                  backgroundColor: 'hsl(225deg 43% 40% / 57%)',
                },
              }}
            />
          </NavLink>
          <h1 className={css.header}>Phonebook</h1>
          <NavLink to="menu">
            <PersonIcon
              sx={{
                color: 'primary.main',
                fontSize: '46px',
                borderRadius: '50%',
                backgroundColor: 'hsla(225, 43%, 40%, 0.306)',
                '&:hover': {
                  backgroundColor: 'hsl(225deg 43% 40% / 57%)',
                },
              }}
            />
          </NavLink>
        </Box>
        <Suspense
          fallback={Loading.dots({
            svgColor: 'hsl(225, 43%, 40%)',
            backgroundColor: '#00000073',
          })}
        >
          <Outlet />
        </Suspense>
      </Box>
      {Loading.remove()}
    </ThemeProvider>
  );
};
