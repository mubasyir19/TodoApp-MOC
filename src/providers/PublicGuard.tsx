import { Navigate, Outlet } from 'react-router';
import { useAuthStore } from '../stores/authStore';

function PublicGuard() {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return <Navigate to={'/dashboard'} replace />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default PublicGuard;
