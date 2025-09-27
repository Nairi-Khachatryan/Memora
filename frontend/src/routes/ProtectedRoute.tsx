import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { ROUTES } from './routhPath';

const ProtectedRoute = () => {
  const isAuth = useAuth();

  if (!isAuth) {
    return <Navigate to={ROUTES.SIGN_IN} replace />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
