import { Navigate, Outlet } from 'react-router';
import { useAuthStore } from '../stores/authStore';

function PrivateGuard() {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to={'/login'} replace />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default PrivateGuard;
