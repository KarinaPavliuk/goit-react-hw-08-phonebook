import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'Layout/Layout';
import PrivateRoute from 'guards/PrivateRoute/PrivateRoute';
import PublicRoute from 'guards/PublicRoute/PublicRoute';
import { useSelector } from 'react-redux';
import { isRefreshingSelector } from 'store/users/selectors';

const HomePage = lazy(() => import('components/HomePage/HomePage'));
const PublicPage = lazy(() => import('components/PublicPage/PublicPage'));
const UserMenu = lazy(() => import('components/UserMenu/UserMenu'));
const RegisterPage = lazy(() => import('components/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('components/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('components/ContactsPage/ContactsPage'));

export const App = () => {
  //useEffect для запуску операції getUserThunk

  const isRefreshing = useSelector(isRefreshingSelector);

  if (isRefreshing) {
    return <div>...loading</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="public"
          element={
            <PublicRoute>
              <PublicPage />
            </PublicRoute>
          }
        />
        <Route
          path="menu"
          element={
            <PrivateRoute>
              <UserMenu />
            </PrivateRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
