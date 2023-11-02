import { NavLink, Outlet } from 'react-router-dom';
// import css from '../Layout/Layout.module.css';
// import styled from 'styled-components';
import { Suspense } from 'react';

// const NavLink = styled(NavLink)`
//   text-decoration: none;
//   color: black;

//   &.active {
//     color: #f52654;
//   }
// `;

export const Layout = () => {
  return (
    <div>
      <div>
        <NavLink to="/">Home</NavLink>
        <br></br>
        <NavLink to="register">Sign up</NavLink>
        <br></br>
        <NavLink to="login">Sign in</NavLink>
        <br></br>
        <NavLink to="contacts">Contacts</NavLink>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
