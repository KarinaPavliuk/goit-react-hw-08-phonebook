import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import { Layout } from 'Layout/Layout';

const HomePage = lazy(() => import('components/HomePage/HomePage'));
const UserMenu = lazy(() => import('components/UserMenu/UserMenu'));
const RegisterPage = lazy(() => import('components/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('components/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('components/ContactsPage/ContactsPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="menu" element={<UserMenu />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
